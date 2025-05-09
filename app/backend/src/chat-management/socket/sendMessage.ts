import { NEW_EVENT_SEND_MESSAGE } from "../../util/constants.json";
import { Socket } from "socket.io";
import { sendMessage, isUserInChat } from "../chat.helper";

export default function handleSendMessage(socket: Socket) {
  socket.on(
    NEW_EVENT_SEND_MESSAGE,
    async ({ chatId, content, replyToId }, callback) => {
      try {
        const userId = socket.data.userId;

        if (!userId || !chatId || !content?.trim()) {
          callback(false, { error: "Invalid request" });
          return;
        }

        // Verify user is in this chat
        const userInChat = await isUserInChat(userId, chatId);
        if (!userInChat) {
          callback(false, { error: "You are not a member of this chat" });
          return;
        }

        // Send message to database
        const message = await sendMessage(chatId, userId, content, replyToId);
        socket.to(chatId).emit(NEW_EVENT_SEND_MESSAGE, message);
        callback(true, message);
      } catch (error) {
        console.error("Error handling send message:", error);
        callback(false, { error: "Failed to send message" });
      }
    }
  );
}
