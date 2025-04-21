import { Request, Response, NextFunction } from "express";
import { createJWT } from "../util/createJWT";
import { NODE_ENV, environment } from "../util/secrets";
// import { generateAuthJWT } from "../util/generateAuth";
import { generateToken } from "../util/generateToken";
import { validateUserDetails } from "../util/validateUserDetails";
import { compareSync, hashSync } from "bcryptjs";
import * as EmailValidator from "email-validator";
import prisma from "../util/db";
import { success, fail } from "../util/response";
import sendVerificationEmail from "../util/sendVerificationEmail";

let token: string;
let emailFirstName: string;
export const signup = async (req: Request, res: Response) => {
  try {
    let validationResult = validateUserDetails(req.body);
    if (validationResult === "rejected") {
      fail(res, 400, "All fields are required");
      return;
    }

    const { name, email, password } = req.body;
    const emailFormResult = EmailValidator.validate(email);

    if (!emailFormResult) {
      fail(res, 400, "Invalid email format");
      return;
    }
    const emailExist = await prisma.user.findUnique({
      where: { email },
    });
    if (emailExist) {
      fail(res, 400, "User already exists");
    }

    token = generateToken().toString();
    emailFirstName = name;

    //Verification time span
    const time = new Date(Date.now() + 1 * 60);

    // create user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashSync(password!, 10),
        verificationToken: token,
        verificationTokenExpiresAt: time,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    await sendVerificationEmail(email, emailFirstName, token).catch(
      (err: any) => {
        console.error("Register user send verification email:", err.message);
      }
    );
    res.status(201).json({
      status: "success",
      code: "201",
      message:
        "You have successfully registered. Please check your email for verification.",
      data: newUser,
    });
    return;
  } catch (error: any) {
    console.error("Register user:", error.message);

    res.status(500).json({
      status: "error",
      code: "500",
      message: "Internal server error",
    });
    return;
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await findUserByEmail(email, res);
    if (!user) return;

    if (!(await handleEmailVerification(user, res))) return;

    if (!(await validatePassword(password, user.password!, res))) return;

    const accessToken = createAccessToken(user.id);
    setAccessTokenCookie(res, accessToken);

    const userData = await getUserData(email);
    res.status(201).json({
      status: "success",
      code: "201",
      message: "Login Successfully",
      data: userData,
    });
  } catch (error: any) {
    console.error("Login error:", error.message);
    res.status(500).json({
      status: "error",
      code: "500",
      message: "Internal server error",
    });
  }
};

const findUserByEmail = async (email: string, res: Response) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    res.status(404).json({
      status: "error",
      code: "404",
      message: "User not found",
    });
  }
  return user;
};

const handleEmailVerification = async (user: any, res: Response) => {
  if (user.isVerified === "true") return true;

  token = generateToken().toString();
  const time = new Date(Date.now() + 1 * 60 * 60 * 1000);
  emailFirstName = user.name!.charAt(0);

  await prisma.user.update({
    where: { email: user.email },
    data: { verificationToken: token, verificationTokenExpiresAt: time },
  });

  await sendVerificationEmail(user.email!, user.name!, token).catch(
    (err: any) => {
      console.error("Error sending verification email:", err.message);
    }
  );

  res.status(403).json({
    status: "error",
    code: "403",
    message:
      "Your email is not verified. A new verification email has been sent to your inbox.",
  });
  return false;
};

const validatePassword = async (
  password: string,
  hashedPassword: string,
  res: Response
) => {
  const result = compareSync(password, hashedPassword);
  if (!result) {
    res.status(401).json({
      status: "error",
      code: "401",
      message: "Invalid credentials",
    });
    return false;
  }
  return true;
};

const createAccessToken = (userID: string) => createJWT({ userID });

const setAccessTokenCookie = (res: Response, accessToken: string) => {
  const date = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000); // 14 days
  const expiryDate = new Date(date + " UTC");
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    expires: expiryDate,
    sameSite: "lax",
    secure: NODE_ENV === "production",
  });
};

const getUserData = async (email: string) => {
  return prisma.user.findUnique({
    where: { email },
    select: { id: true, name: true, email: true },
  });
};
export const logout = (req: Request, res: Response) => {
  res.cookie("accessToken", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res
    .status(200)
    .json({ status: "success", code: "200", message: "user logged out!" });
};

export const verifyEmail = async (req: Request, res: Response) => {
  try {
    const { id, verifyToken } = req.body;

    const verifyUser = await prisma.user.findUnique({
      where: { id: id },
      select: {
        verificationToken: true,
        verificationTokenExpiresAt: true,
      },
    });
    const dateNow = new Date(Date.now());
    const date = new Date(dateNow + " UTC");
    let tokenExpiryDate = new Date(
      verifyUser?.verificationTokenExpiresAt + " UTC"
    );
    if (tokenExpiryDate > date) {
      if (verifyToken == verifyUser?.verificationToken) {
        // update verify User(isVerified to "true")
        console.log(verifyToken, verifyUser?.verificationToken);
        await prisma.user.update({
          where: {
            id: id,
          },
          data: {
            isVerified: "true",
          },
        });
        success(res, 200, "Email verification successful");
        return;
      }
      fail(res, 400, "Invalid input. Please check and try again");
      return;
    }
    fail(
      res,
      400,
      "The token has expired. Please press the 'Resend' button below the page to resend a new token to your email. Thank you."
    );
    return;
  } catch (error: any) {
    console.error("Verify email:", error.message);
    res.status(500).json({
      status: "error",
      code: "500",
      message: "Internal server error",
    });
    return;
  }
};
