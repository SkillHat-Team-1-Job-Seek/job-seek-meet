import { Socket } from "socket.io";
import { NEW_EVENT_EDIT_MESSAGE } from "../../util/constants.json";
import { editMessage, isMessageEditableOrDeletable } from "../chat.helper";

export default function handleEditMessage(socket: Socket) {
  socket.on(
    NEW_EVENT_EDIT_MESSAGE,
    async ({ messageId, content }, callback) => {
      try {
        const userId = socket.data.userId;

        if (!userId || !messageId || !content?.trim()) {
          callback(false, { error: "Invalid request" });
          return;
        }

        // Check if message is still editable
        const isEditable = await isMessageEditableOrDeletable(messageId);
        if (!isEditable) {
          callback(false, {
            error: "Message can no longer be edited (time limit exceeded)",
          });
          return;
        }

        // Edit message in database
        const updatedMessage = await editMessage(messageId, content, userId);

        // Broadcast to chat room
        socket
          .to(updatedMessage.chatId)
          .emit(NEW_EVENT_EDIT_MESSAGE, updatedMessage);

        // Return success to sender
        callback(true, updatedMessage);
      } catch (error) {
        console.error("Error handling edit message:", error);
        callback(false, { error });
      }
    }
  );
}
