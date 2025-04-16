import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRES_IN } from "./secrets";

export const createJWT = (payload: { userID: string }) => {
  const accessToken = jwt.sign(payload, JWT_SECRET!, {
    expiresIn: "14h",
  });
  return accessToken;
};
