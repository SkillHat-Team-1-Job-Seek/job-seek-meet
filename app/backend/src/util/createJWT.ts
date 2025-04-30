import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRES_IN } from "./secrets";

export const createJWT = (payload: { userID: string }) => {
  const accessToken = jwt.sign(payload, JWT_SECRET!, {
    expiresIn: "14h",
  });
  return accessToken;
};

console.log(createJWT({ userID: "ba1677a4-1d9f-45c6-80b4-c3effa0ee233" }));
