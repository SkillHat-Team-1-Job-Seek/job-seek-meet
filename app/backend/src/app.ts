import express, { Express, Request, Response } from "express";
import { PORT } from "./util/secrets";
import authRoutes from "./user-management/auth.routes";
import userRoutes from "./user-management/user.routes";
import groupRoutes from "./group-management/gruop.routes";
import connectionRoutes from "./connection-management/connection.routes";
import cookieParser from "cookie-parser";
import { errorHandler } from "./util/error.handler";
import morgan from "morgan";
import { Server } from "socket.io";
import cors from "cors";
import { ACCESS_ORIGIN } from "./util/secrets";
import { createServer } from "http";
import socketAuth from "./chat-management/socketAuth";
import handleDeleteMessage from "./chat-management/socket/deleteMessage";
import handleEditMessage from "./chat-management/socket/editMessage";
import handleSeenMessage from "./chat-management/socket/seenMessage";
import handleDirectChat from "./chat-management/socket/directChat";
import handleSendMessage from "./chat-management/socket/sendMessage";

const app: Express = express();

const apiVersion = "/api/v1";
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: "*" },
});

app.use(express.json());
app.use(cors());

app.use(morgan("dev"));
app.use(function (_, res, next) {
  res.setHeader("Access-Control-Allow-Origin", ACCESS_ORIGIN as string);

  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  res.setHeader("Access-Control-Allow-Credentials", "true");

  next();
});

app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/connections", connectionRoutes);
app.use("/api/v1/groups", groupRoutes);

app.use(errorHandler);
io.use(socketAuth);
io.on("connection", (socket) => {
  console.log(`New socket connection: ${socket.id}`);

  // Register socket event handlers
  handleSendMessage(socket);
  handleEditMessage(socket);
  handleSeenMessage(socket);
  handleDeleteMessage(socket);
  handleDirectChat(socket);

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log(`Socket disconnected: ${socket.id}`);
  });
});
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
