import { Request, Response, NextFunction } from "express";
import { createJWT } from "../util/createJWT";
import { NODE_ENV, environment } from "../util/secrets";
import { generateAuthJWT } from "../util/generateAuth";
import { validateUserDetails } from "../util/validateUserDetails";
import { compareSync, hashSync } from "bcryptjs";
import * as EmailValidator from "email-validator";
import prisma from "../util/db";
import { success, fail } from "../util/response";

export const signup = async (req: Request, res: Response) => {
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
    where: email,
  });
  if (emailExist) {
    fail(res, 400, "User already exists");
  }
  
};
