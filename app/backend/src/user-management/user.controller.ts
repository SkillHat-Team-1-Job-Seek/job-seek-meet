import { Request, Response } from "express";
import prisma from "../util/db";
import { fail, success, response } from "../util/response";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const sort = (req.query.sort as string) || "registrationDate";

    const filters: any = {};

    // Filter by profession if provided

    if (req.query.profession) {
      filters.profession = {
        contains: req.query.profession as string,
        mode: "insensitive",
      };
    }

    // Filter by location if provided
    if (req.query.location) {
      filters.location = {
        contains: req.query.location as string,
        mode: "insensitive",
      };
    }

    // Filter by tags if provided as comma-separated string
    if (req.query.tags) {
      const tagNames = (req.query.tags as string).split(",");
      filters.tags = {
        some: {
          name: {
            in: tagNames,
          },
        },
      };
    }

    if (req.query.excludeId) {
      filters.id = {
        not: req.query.excludeId as string,
      };
    }

    // Only get verified users
    filters.isVerified = "true";

    // Get users with count
    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where: filters,
        select: {
          id: true,
          name: true,
          email: true,
          profession : true,
          location: true,
          age: true,
          bio: true,
          profileImageUrl: true,
          tags: true,
          password: false,
          verificationToken: false,
          verificationTokenExpiresAt: false,
          isVerified: true,
          registrationDate: true,
          sentConnections: false,
          receivedConnections: false,
        },
        skip,
        take: limit,
        orderBy: {
          [sort]: "desc",
        },
      }),
      prisma.user.count({ where: filters }),
    ]);

    // Use the response utility with pagination
    return response(res, 200, {
      payload: users,
      total,
      count: users.length,
      limit,
      skip,
      sort,
      msg: "Users retrieved successfully",
    });
  } catch (error: any) {
    console.error("Get all users error:", error.message);
    return fail(res, 500, "Failed to retrieve users");
  }
};


