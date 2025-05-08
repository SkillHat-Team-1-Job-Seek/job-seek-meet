import { Request, Response } from "express";
import prisma from "../util/db";
import { success, fail } from "../util/response";

/**
 * Send a connection request to another user
 */
export const sendConnectionRequest = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user?.userID;

    if (!userId) {
      fail(res, 401, "Authentication required");
      return;
    }

    const { recipientId } = req.body;

    // Validate request
    if (!recipientId) {
      fail(res, 400, "Recipient ID is required");
      return;
    }

    // Check if trying to connect with self
    if (userId === recipientId) {
      fail(res, 400, "Cannot send connection request to yourself");
      return;
    }

    // Check if recipient exists
    const recipientExists = await prisma.user.findUnique({
      where: { id: recipientId },
      select: { id: true },
    });

    if (!recipientExists) {
      fail(res, 404, "Recipient user not found");
      return;
    }

    // Check if connection already exists
    const existingConnection = await prisma.connection.findFirst({
      where: {
        OR: [
          { userId1: userId, userId2: recipientId },
          { userId1: recipientId, userId2: userId },
        ],
      },
    });

    if (existingConnection) {
      // Handle based on existing connection status
      if (existingConnection.status === "PENDING") {
        fail(
          res,
          400,
          "A connection request already exists between these users"
        );
        return;
      }

      if (existingConnection.status === "ACCEPTED") {
        fail(res, 400, "These users are already connected");
        return;
      }
    }

    // Create new connection with PENDING status
    const newConnection = await prisma.connection.create({
      data: {
        userId1: userId,
        userId2: recipientId,
        status: "PENDING",
      },
    });

    try {
      const senderName = await prisma.user.findUnique({
        where: { id: userId },
        select: { name: true },
      });

      await prisma.notification.create({
        data: {
          userId: recipientId,
          type: "CONNECTION_REQUEST",
          message: `[{"senderId":"${userId}"}] ${
            senderName?.name || "Someone"
          } has sent you a connection request`,
          isRead: false,
        },
      });
    } catch (notifError) {
      console.error("Failed to create notification:", notifError);
    }

    success(res, 201, null, "Connection request sent successfully");
  } catch (error) {
    console.error("Send connection request error:", error);
    fail(res, 500, "Failed to send connection request");
  }
};

/**
 * Get all accepted connections for the current user
 */
export const getUserConnections = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user?.userID;

    if (!userId) {
      fail(res, 401, "Authentication required");
      return;
    }

    // Get all accepted connections where the user is either userId1 or userId2
    const connections = await prisma.connection.findMany({
      where: {
        OR: [
          { userId1: userId, status: "ACCEPTED" },
          { userId2: userId, status: "ACCEPTED" },
        ],
      },
      include: {
        // Include details of the other user (if current user is userId1)
        user2: {
          select: {
            id: true,
            name: true,
            profession: true,
            location: true,
            profileImageUrl: true,
            bio: true,
            tags: true,
          },
        },
        // Include details of the other user (if current user is userId2)
        user1: {
          select: {
            id: true,
            name: true,
            profession: true,
            location: true,
            profileImageUrl: true,
            bio: true,
            tags: true,
          },
        },
      },
    });

    // Process connections to return a consistent format
    const formattedConnections = connections.map((connection) => {
      // Determine which user is the connected user (not the current user)
      const connectedUser =
        connection.userId1 === userId ? connection.user2 : connection.user1;

      return {
        connectionId: connection.userId1, // Fix: Use connection.id instead of userId1
        user: connectedUser,
        connectedSince: connection.updatedAt, // Fix: Use updatedAt instead of connectedAt
      };
    });

    success(
      res,
      200,
      formattedConnections,
      "User connections retrieved successfully"
    );
  } catch (error) {
    console.error("Get user connections error:", error);
    fail(res, 500, "Failed to retrieve user connections");
  }
};

/**
 * Accept a connection request
 */
export const acceptConnectionRequest = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const recipientId = req.user?.userID; // The current user accepting the request
    const { senderId } = req.params; // The one who sent the request

    if (!recipientId) {
      fail(res, 401, "Authentication required");
      return;
    }

    if (!senderId) {
      fail(res, 400, "Sender ID is required");
      return;
    }

    // Find the connection using composite ID
    const connection = await prisma.connection.findUnique({
      where: {
        userId1_userId2: {
          userId1: senderId,
          userId2: recipientId,
        },
      },
      include: {
        user1: {
          select: { id: true, name: true },
        },
      },
    });

    if (!connection) {
      fail(res, 404, "Connection request not found");
      return;
    }

    if (connection.status !== "PENDING") {
      fail(res, 400, "This request cannot be accepted");
      return;
    }

    // Update the connection to ACCEPTED
    await prisma.connection.update({
      where: {
        userId1_userId2: {
          userId1: senderId,
          userId2: recipientId,
        },
      },
      data: {
        status: "ACCEPTED",
        connectedAt: new Date(),
      },
    });

    // Create a notification for the sender
    try {
      await prisma.notification.create({
        data: {
          userId: recipientId,
          type: "CONNECTION_ACCEPTED",
          message: `${
            req.user?.name || "Someone"
          } accepted your connection request`,
          isRead: false,
        },
      });
    } catch (notifError) {
      console.error("Notification error:", notifError);
    }

    success(res, 200, null, "Connection request accepted");
  } catch (error) {
    console.error("Accept connection error:", error);
    fail(res, 500, "Something went wrong");
  }
};

// /**
//  * Ignore a connection request (LinkedIn-style)
//  */
// export const ignoreConnectionRequest = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const userId = req.user?.userID;
//     const { connectionId } = req.params;

//     if (!userId) {
//       fail(res, 401, "Authentication required");
//       return;
//     }

//     // Find the connection
//     const connection = await prisma.connection.findUnique({
//       where: { id: connectionId },
//     });

//     if (!connection) {
//       fail(res, 404, "Connection request not found");
//       return;
//     }

//     // Verify user is the recipient of this request
//     if (connection.userId2 !== userId) {
//       fail(res, 403, "Not authorized to ignore this request");
//       return;
//     }

//     // Verify connection is in PENDING status
//     if (connection.status !== "PENDING") {
//       fail(res, 400, "Only pending requests can be ignored");
//       return;
//     }

//     success(res, 200, null, "Connection request ignored");
//   } catch (error) {
//     console.error("Ignore connection request error:", error);
//     fail(res, 500, "Failed to ignore connection request");
//   }
// };

/**
 * Get nearby users based on location (satisfies user story)
 */
export const getNearbyUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user?.userID;

    if (!userId) {
      fail(res, 401, "Authentication required");
      return;
    }

    const radius = Number(req.query.radius) || 50; // Default 50 mile radius
    const limit = Number(req.query.limit) || 10;

    // Get current user to find their industry and location
    const currentUser = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        profession: true,
        industry: true,
        location: true,
      },
    });

    if (!currentUser) {
      fail(res, 404, "User not found");
      return;
    }

    // For now, use basic location matching (in production, use coordinates and geospatial)
    const nearbyUsers = await prisma.user.findMany({
      where: {
        id: { not: userId },
        location: { contains: currentUser.location?.split(",")[0] || "" }, // Simple city match
        showProfile: true,
        isVerified: "true",
      },
      select: {
        id: true,
        name: true,
        profession: true,
        industry: true,
        location: true,
        profileImageUrl: true,
        showAge: true,
        age: true,
        tags: true,
      },
      take: limit,
    });

    // Process users to respect privacy setting

    success(
      res,
      200,
      nearbyUsers,
      `Found ${nearbyUsers.length} nearby job seekers`
    );
  } catch (error) {
    console.error("Get nearby users error:", error);
    fail(res, 500, "Failed to retrieve nearby users");
  }
};
