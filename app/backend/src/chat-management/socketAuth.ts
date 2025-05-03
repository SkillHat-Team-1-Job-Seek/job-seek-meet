import { Socket } from "socket.io";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../util/secrets";
import prisma from "../util/db";

// interface UserChat {
//   chatId: string;
// }

export default function socketAuth(socket: Socket, next: Function) {
  try {
    // Get token from auth object or from authorization header
    const token =
      socket.handshake.auth.token ||
      socket.handshake.headers.authorization?.split(" ")[1];

    if (!token) {
      return next(new Error("Authentication error: No token provided"));
    }

    // Verify JWT token
    const decoded: any = jwt.verify(token, JWT_SECRET);

    if (!decoded.id) {
      return next(new Error("Authentication error: Invalid token"));
    }

    // Store user ID in socket for use in handlers
    socket.data.userId = decoded.id;

    // Join user to their chat rooms
    joinUserChats(socket, decoded.id);

    next();
  } catch (error) {
    console.error("Socket authentication error:", error);
    next(new Error("Authentication error"));
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
