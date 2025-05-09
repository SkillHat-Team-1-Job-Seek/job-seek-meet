import prisma from "../util/db";
import { fail, success } from "../util/response";
import { Request, Response } from "express";
export const getUserNotifications = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userId = req.user?.userID;

  if (!userId) {
    fail(res, 401, "Authentication required");
  }

  const notifications = await prisma.notification.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });

  success(res, 200, notifications, "Notifications retrieved successfully");
};
