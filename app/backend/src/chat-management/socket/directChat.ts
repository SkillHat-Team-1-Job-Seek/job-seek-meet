import { Socket } from "socket.io";
import { getOrCreateChat } from "../chat.helper";

interface DirectChatRequest {
  connectionId: string;
}

export default function handleDirectChat(socket: Socket) {
  socket.on(
    "start_direct_chat",
    async (
      { connectionId }: DirectChatRequest,
      callback: (success: boolean, data?: any) => void
    ) => {
      try {
        const userId = socket.data.userId;

        if (!userId || !connectionId) {
          callback(false, { error: "Invalid request" });
          return;
        }

        // Get or create direct chat with connection
        const chat = await getOrCreateChat(userId, connectionId);

        // Join the chat room (if not already joined)
        socket.join(chat.id);

        callback(true, chat);
      } catch (error) {
        console.error("Error starting direct chat:", error);
      }
    }
  );
}
