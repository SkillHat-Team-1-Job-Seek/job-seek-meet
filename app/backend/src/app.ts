import express, { Express, Request, Response } from "express";
import { PORT } from "./util/secrets";
import authRoutes from "./user-management/auth.routes";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
// import { errorHandler } from "./util/";
const app: Express = express();

const apiVersion = "/api/v1";

app.use(express.json());
app.use(cors());

app.use(morgan("dev"));

app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
/**
 * Handles the incoming request and sends a "Hello World!" response.
 *
 * @param {Request} req - The request object representing the HTTP request.
 * @param {Response} res - The response object used to send a response to the client.
 */
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
