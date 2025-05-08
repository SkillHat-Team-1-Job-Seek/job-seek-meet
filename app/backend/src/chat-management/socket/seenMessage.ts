import { Socket } from "socket.io";
import { NEW_EVENT_READ_MESSAGE } from "../../util/constants.json";
import { seenMessage, isUserInChat } from "../chat.helper";

export default function handleSeenMessage(socket: Socket) {
  socket.on(NEW_EVENT_READ_MESSAGE, async ({ chatId, messageId }, callback) => {
    try {
      const userId = socket.data.userId;

      if (!userId || !chatId || !messageId) {
        callback(false);
        return;
      }

      // Verify user is in this chat
      const userInChat = await isUserInChat(userId, chatId);
      if (!userInChat) {
        callback(false);
        return;
      }

      // Mark message as seen
      const success = await seenMessage(chatId, messageId);

      if (success) {
        socket.to(chatId).emit(NEW_EVENT_READ_MESSAGE, {
          messageId,
          seenBy: userId,
          timestamp: new Date(),
        });
      }
      callback(success);
    } catch (error) {
      console.error("Error handling seen message:", error);
      callback(false);
    }
  });
}
