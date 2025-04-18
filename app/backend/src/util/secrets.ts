require("dotenv").config({ path: "./.env" });

// Use default port 3001 only in non-production environments
export const PORT = process.env.PORT || (process.env.NODE_ENV !== "production" ? 3001 : undefined);
export const JWT_SECRET = `${process.env.JWT_SECRET}`;
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
export const NODE_ENV = process.env.NODE_ENV;
export const environment = process.env.NODE_ENV;
export const EMAIL_ADDRESS = process.env.EMAIL_ADDRESS;

export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
