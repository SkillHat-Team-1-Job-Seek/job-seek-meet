import { Socket } from "socket.io";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../util/secrets";
import prisma from "../util/db";

// interface UserChat {
//   chatId: string;
// }

export default function socketAuth(socket: Socket, next: Function) {
  try {
    const token = socket.handshake.auth.token;

    if (!token) {
      return next(new Error("Authentication error: No token provided"));
    }

    try {
      const decoded: any = jwt.verify(token, JWT_SECRET);
      socket.data.userId = decoded.userID || decoded.id;

      if (!socket.data.userId) {
        return next(new Error("Authentication error: Invalid token"));
      }

      // Join user to their chat rooms
      joinUserChats(socket, socket.data.userId);

      next();
    } catch (error) {
      console.error("Token verification error:", error);
      return next(new Error(`Token verification failed: ${error}`));
    }
  } catch (error) {
    console.error("Socket authentication error:", error);
    return next(new Error("Authentication error"));
  }
}

// Helper to join user to their chat rooms
async function joinUserChats(socket: Socket, userId: string) {
  try {
    // Get all chats for this user
    const userChats = await prisma.userChat.findMany({
      where: { userId },
      select: { chatId: true },
    });

    userChats.forEach((chat) => {
      socket.join(chat.chatId);
    });

    console.log(`User ${userId} joined ${userChats.length} chat rooms`);
  } catch (error) {
    console.error("Error joining user chats:", error);
  }
}
