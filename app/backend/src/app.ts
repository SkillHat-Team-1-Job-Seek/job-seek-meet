import express, { Express, Request, Response } from "express";
import { PORT } from "./util/secrets";
import authRoutes from "./user-management/auth.routes";
import userRoutes from "./user-management/user.routes";
import connectionRoutes from "./connection-management/connection.routes";
import cookieParser from "cookie-parser";
import { errorHandler } from "./util/error.handler";
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
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/connections", connectionRoutes);

app.use(errorHandler);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
