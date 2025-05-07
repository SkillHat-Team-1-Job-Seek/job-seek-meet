import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { JWT_SECRET } from "./secrets";
import CustomHttpError from "./custom.error";

export const verifyUserToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const token = req.cookies.accessToken;
  console.log(token);
  if (!token) {
    res.status(401).json({
      sucess: false,
      error: {
        message: "Unauthorized user",
      },
    });
    return;
  }

  try {
    const verifiedToken = jwt.verify(token, JWT_SECRET);

    if (typeof verifiedToken === "object" && "userID" in verifiedToken) {
      req.user = verifiedToken as { userID: string };
    } else {
      throw new CustomHttpError(401, "Invalid token structure");
    }

    next();
  } catch (err) {
    res.status(401).json({
      success: false,
      error: {
        message: "Invalid or expired token",
      },
    });
  }
};
