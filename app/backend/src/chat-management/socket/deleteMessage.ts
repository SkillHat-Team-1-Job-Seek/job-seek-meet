import { Socket } from "socket.io";
import { NEW_EVENT_DELETE_MESSAGE } from "../../util/constants.json";
import { removeMessage, isMessageEditableOrDeletable } from "../chat.helper";

export default function handleDeleteMessage(socket: Socket) {
  socket.on(NEW_EVENT_DELETE_MESSAGE, async ({ messageId }, callback) => {
    try {
      const userId = socket.data.userId;

      if (!userId || !messageId) {
        callback(false);
        return;
      }

      // Check if message is still deletable
      const isDeletable = await isMessageEditableOrDeletable(messageId);
      if (!isDeletable) {
        callback(false, {
          error: "Message can no longer be deleted (time limit exceeded)",
        });
        return;
      }

      // Delete message
      const result = await removeMessage(messageId, userId);

      if (result.success) {
        if (result.chatId) {
          socket.to(result.chatId).emit(NEW_EVENT_DELETE_MESSAGE, {
            messageId,
          });
        } else {
          console.error("Error: chatId is undefined");
        }

        // Return success to sender
        callback(true);
      } else {
        callback(false, { error: result.reason });
      }
    } catch (error) {
      console.error("Error handling delete message:", error);
      callback(false, { error: "Server error" });
    }
  });
}
