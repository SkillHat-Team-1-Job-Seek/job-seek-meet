import { NextFunction, Request, Response } from "express";
import prisma from "../util/db";
import { success, fail } from "../util/response";

// GET /api/groups
export const getAllGroups = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const groups = await prisma.group.findMany({
      include: {
        _count: {
          select: { members: true },
        },
      },
    });
    success(res, 200, groups, "Groups Retrieved sucessfully");
  } catch (error) {
    next(error);
  }
};

export const getGroupsForUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.user?.userId;

  if (!userId) {
    return res.status(401).json({ error: "Authentication required" });
  }

  try {
    const groups = await prisma.group.findMany({
      where: {
        members: {
          some: { userId }, // userId from req.user?.userID
        },
      },
      select: {
        id: true,
        name: true,
        description: true,
        groupImageUrl: true,
        createdAt: true,
        members: {
          select: {
            userId: true,
          },
        },
        _count: {
          select: {
            members: true,
          },
        },
      },
    });
    success(res, 200, groups, "Group retrived Sucessfully");
  } catch (error) {
    next(error);
  }
};

// POST /api/groups/:groupId/join
export const joinGroup = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userId = req.user?.userId; // from middleware
  const groupId = req.params.groupId;

  if (!userId || !groupId) {
    fail(res, 400, "Missing groupId or user authentication");
    return;
  }

  try {
    // Check if user is already a member
    const existing = await prisma.groupMembership.findUnique({
      where: {
        userId_groupId: { userId, groupId },
      },
    });

    if (existing) {
      fail(res, 400, "Already a member of the group");
    }

    const joined = await prisma.groupMembership.create({
      data: {
        userId,
        groupId,
        isAdmin: false,
      },
    });

    res
      .status(201)
      .json({ message: "Joined group successfully", membership: joined });
  } catch (error) {
    next(error);
  }
};

// POST /api/groups
export const createGroup = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userId = req.user?.userID;
  const { name, description, groupImageUrl } = req.body;

  if (!name || !userId) {
    fail(res, 400, "Name and userId are required");
    return;
  }

  try {
    const imageURL = (req.file as any).path;
    const newGroup = await prisma.group.create({
      data: {
        name,
        description,
        groupImageUrl: imageURL,
        members: {
          create: {
            userId,
            isAdmin: true,
          },
        },
      },
      include: {
        members: true,
      },
    });

    success(res, 201, newGroup, "Group Created Successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create group" });
  }
};
