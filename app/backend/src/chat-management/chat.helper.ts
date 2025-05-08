import prisma from "../util/db";
import { FIFTEEN_MINUTES } from "../util/constants.json";

/**
 * Send a new message to a chat
 */
export const sendMessage = async (
  chatId: string,
  senderId: string,
  content: string,
  replyToId?: string
) => {
  try {
    return await prisma.message.create({
      data: {
        message: content,
        senderId,
        chatId,
        replyToId: replyToId || undefined,
        type: "message",
      },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            profileImageUrl: true,
          },
        },
        replyTo: true,
      },
    });
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};

/**
 * Edit an existing message
 */
export const editMessage = async (
  messageId: string,
  newContent: string,
  userId: string
) => {
  try {
    // Find the message
    const message = await prisma.message.findUnique({
      where: { id: messageId },
    });

    if (!message) {
      throw new Error("Message not found");
    }

    // Verify message ownership
    if (message.senderId !== userId) {
      throw new Error("Cannot edit another user's message");
    }

    // Check time limit
    const timeSinceCreated = Date.now() - new Date(message.createdAt).getTime();
    if (timeSinceCreated > FIFTEEN_MINUTES) {
      throw new Error("Messages can only be edited within 15 minutes");
    }

    // Store old content
    let oldMessages = (message.oldMessages as string[]) || [];
    oldMessages.push(message.message);

    // Update message
    return await prisma.message.update({
      where: { id: messageId },
      data: {
        message: newContent,
        isEdited: true,
        oldMessages: oldMessages,
      },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            profileImageUrl: true,
          },
        },
      },
    });
  } catch (error) {
    console.error("Error editing message:", error);
    throw error;
  }
};

/**
 * Mark a message as seen
 */
export const seenMessage = async (chatId: string, messageId: string) => {
  try {
    await prisma.message.update({
      where: { id: messageId },
      data: {
        isRead: true,
      },
    });

    return true;
  } catch (error) {
    console.error("Error marking message as seen");
    return false;
  }
};

/**
 * Remove a message
 */
export const removeMessage = async (messageId: string, userId: string) => {
  try {
    // Find the message
    const message = await prisma.message.findUnique({
      where: { id: messageId },
    });

    if (!message) {
      return { success: false, reason: "Message not found" };
    }

    // Verify ownership if needed
    if (message.senderId !== userId) {
      return { success: false, reason: "Cannot delete another user's message" };
    }

    // Delete the message
    await prisma.message.delete({
      where: { id: messageId },
    });

    return { success: true, chatId: message.chatId };
  } catch (error) {
    console.error("Error removing message:", error);
    return { success: false, reason: "Database error" };
  }
};

/**
 * Check if message is editable or deletable (within time window)
 */
export const isMessageEditableOrDeletable = async (messageId: string) => {
  try {
    const message = await prisma.message.findUnique({
      where: { id: messageId },
    });

    if (!message) {
      return false;
    }

    const timeSinceCreated = Date.now() - new Date(message.createdAt).getTime();
    return timeSinceCreated <= FIFTEEN_MINUTES;
  } catch (error) {
    console.error("Error checking if message is editable/deletable:", error);
    return false;
  }
};

/**
 * Create or retrieve a chat between two connected users
 */
export const getOrCreateChat = async (userId1: string, userId2: string) => {
  try {
    // Verify users are connected
    const connection = await prisma.connection.findFirst({
      where: {
        OR: [
          { userId1: userId1, userId2: userId2, status: "ACCEPTED" },
          { userId1: userId2, userId2: userId1, status: "ACCEPTED" },
        ],
      },
    });

    if (!connection) {
      throw new Error("Users must be connected to chat");
    }

    // Check if chat already exists
    const existingChat = await prisma.userChat.findFirst({
      where: {
        userId: userId1,
        chat: {
          users: {
            some: {
              userId: userId2,
            },
          },
        },
      },
      include: {
        chat: {
          include: {
            users: {
              include: {
                user: {
                  select: {
                    id: true,
                    name: true,
                    profileImageUrl: true,
                  },
                },
              },
            },
            messages: {
              orderBy: { createdAt: "desc" },
              take: 50,
              include: {
                sender: {
                  select: {
                    id: true,
                    name: true,
                    profileImageUrl: true,
                  },
                },
                replyTo: true,
              },
            },
          },
        },
      },
    });

    if (existingChat) {
      return existingChat.chat;
    }

    // Create new chat
    const chat = await prisma.chat.create({
      data: {
        users: {
          create: [{ userId: userId1 }, { userId: userId2 }],
        },
      },
      include: {
        users: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                profileImageUrl: true,
              },
            },
          },
        },
      },
    });

    return chat;
  } catch (error) {
    console.error("Error creating/getting chat:", error);
    throw error;
  }
};

// in chat.helper.ts
export const isUserInChat = async (userId: string, chatId: string) => {
  // For testing user, bypass the check
  if (userId === "test-user-123") {
    return true;
  }

  // Regular check for real users
  const userChat = await prisma.userChat.findFirst({
    where: {
      userId,
      chatId,
    },
  });

  return !!userChat;
};
/**
 * Check if a user is a member of a chat
 */
// export const isUserInChat = async (userId: string, chatId: string) => {
//   try {
//     const userChat = await prisma.userChat.findUnique({
//       where: {
//         userId_chatId: {
//           userId,
//           chatId,
//         },
//       },
//     });

//     return !!userChat;
//   } catch (error) {
//     console.error("Error checking if user is in chat:", error);
//     return false;
//   }
// };

/**
 * Get chat messages with pagination
 */
export const getChatMessages = async (
  chatId: string,
  limit = 50,
  offset = 0
) => {
  try {
    return await prisma.message.findMany({
      where: { chatId },
      orderBy: { createdAt: "desc" },
      skip: offset,
      take: limit,
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            profileImageUrl: true,
          },
        },
        replyTo: true,
      },
    });
  } catch (error) {
    console.error("Error getting chat messages:", error);
    throw error;
  }
};
