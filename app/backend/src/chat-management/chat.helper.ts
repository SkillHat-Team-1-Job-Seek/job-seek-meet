import prisma from "../util/db";
import { FIFTEEN_MINUTES } from "../util/constants.json";

const activeChats = new Map();

/**
 * Mark a message as seen
 */

export const seenMessage = async (chatId: string, messageId: string) => {
  try {
    const message = await prisma.message.findUnique({
      where: { id: messageId },
    });
    if (!message) {
      return false;
    }
    if (message.isRead) {
      return true;
    }

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

export const sendMessage = async (
  chatId: string,
  senderId: string,
  content: string,
  replyToId?: string
) => {
  try {
    const message = await prisma.message.create({
      data: {
        message: content,
        chatId: chatId,
        senderId: senderId,
        replyToId: replyToId || null,
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

    return message;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};

export const editMessage = async (
  messageId: string,
  newContent: string,
  userId: string
) => {
  const message = await prisma.message.findUnique({
    where: { id: messageId },
  });

  if (!message) {
    throw new Error("Message not found");
  }

  if (message.senderId !== userId) {
    throw new Error("Cannot edit another user's message");
  }
};
