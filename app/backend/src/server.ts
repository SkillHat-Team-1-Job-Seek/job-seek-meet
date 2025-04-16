import express, { Express, Request, Response } from "express";
import { PORT } from "./util/secrets";
import authRoutes from "./user-management/auth.routes";
import cookieParser from "cookie-parser";
import morgan from "morgan";
// import { errorHandler } from "./util/";
const app: Express = express();

const apiVersion = "/api/v1";

app.use(express.json());

app.use(morgan("dev"));

app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
