import { Request, Response } from "express";
import prisma from "../util/db";
import { fail, success, response } from "../util/response";
import { updateUserProfileDTO, validateUserInput } from "./user.dto";

/**
 * Get all users with filtering and pagination
 */
export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
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

    // Apply privacy filters
    filters.showProfile = true;

    // Get users with count
    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where: filters,
        select: {
          id: true,
          name: true,
          email: true,
          profession: true,
          location: true,
          age: true,
          bio: true,
          profileImageUrl: true,
          tags: true,
          isVerified: true,
          registrationDate: true,
          showAge: true,
        },
        skip,
        take: limit,
        orderBy: {
          [sort]: "desc",
        },
      }),
      prisma.user.count({ where: filters }),
    ]);

    const filteredUsers = users.map((user) => {
      // Create a copy we can modify
      const processedUser: Partial<typeof user> = { ...user };

      // Apply privacy settings
      if (!user.showAge) {
        delete processedUser.age;
      }

      // Remove unwanted fields
      delete processedUser.showAge;

      return processedUser;
    });
    // Use the response utility with pagination
    response(res, 200, {
      payload: filteredUsers,
      total,
      count: filteredUsers.length,
      limit,
      skip,
      sort,
      msg: "Users retrieved successfully",
    });
  } catch (error: any) {
    console.error("Get all users error:", error.message);
    fail(res, 500, "Failed to retrieve users");
  }
};

/**
 * Get user by ID
 */
export const getUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const currentUserId = req.user?.userID;

    const user = await prisma.user.findUnique({
      where: { id },
      include: { tags: true },
    });

    if (!user) {
      fail(res, 404, "User does not exist");
      return;
    }

    // Remove sensitive data
    const {
      password,
      verificationToken,
      verificationTokenExpiresAt,
      ...safeUser
    } = user as { age?: number } & typeof user;

    if (currentUserId !== id) {
      // If profile is private, deny access
      if (!user.showProfile) {
        fail(res, 403, "This profile is private");
        return;
      }

      // Apply age privacy
      if (!user.showAge) {
        delete (safeUser as { age?: number }).age;
      }
    }

    success(res, 200, safeUser, "User retrieved successfully");
  } catch (error) {
    console.error("Get user error:", error);
    fail(res, 500, "Failed to retrieve user");
  }
};

/**
 * Get current user's profile
 */
export const getCurrentUserProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user?.userID;

    if (!userId) {
      fail(res, 401, "Authentication required");
      return;
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { tags: true },
    });

    if (!user) {
      fail(res, 404, "User not found");
      return;
    }

    // Remove sensitive data
    const {
      password,
      verificationToken,
      verificationTokenExpiresAt,
      ...safeUser
    } = user;

    success(res, 200, safeUser, "Profile retrieved successfully");
    return;
  } catch (error) {
    console.error("Get current user profile error:", error);
    fail(res, 500, "Failed to retrieve profile");
    return;
  }
};

/**
 * Update user profile with image upload and privacy settings
 */
export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user?.userID;

    if (!userId) {
      fail(res, 401, "Authentication required");
      return;
    }

    // Validate input data using the DTO
    const validation = validateUserInput(req.body, updateUserProfileDTO);
    console.error("Validation Errors:", validation.errors); // Log validation errors
    console.log("Request Body:", req.body);

    if (!validation.isValid) {
      fail(res, 400, "Validation failed");
    }

    // Get validated data
    const {
      name,
      profession,
      location,
      age,
      bio,
      tags,
      showAge,
      showGender,
      showProfile,
    } = validation.value;

    // Prepare update data (only include fields that were provided)
    const updateData: any = {};

    // Only add fields that were actually provided
    if (name !== undefined) updateData.name = name;
    if (profession !== undefined) updateData.profession = profession;
    if (location !== undefined) updateData.location = location;
    if (age !== undefined) updateData.age = Number(age);
    if (bio !== undefined) updateData.bio = bio;

    // Add privacy settings if provided
    if (showAge !== undefined) updateData.showAge = showAge;
    if (showGender !== undefined) updateData.showGender = showGender;
    if (showProfile !== undefined) updateData.showProfile = showProfile;

    // Check if the user uploaded a new profile image
    if (req.file) {
      updateData.profileImageUrl = req.file.path;
    }

    if (tags && Array.isArray(tags) && tags.length > 0) {
      updateData.tags = {
        set: [],
        // Then connect or create the new tags
        connectOrCreate: tags.map((tagName) => ({
          where: { name: tagName },
          create: { name: tagName },
        })),
      };
    }

    // Single database call to update everything
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updateData,
      include: { tags: true },
    });

    // Remove sensitive data
    const {
      password,
      verificationToken,
      verificationTokenExpiresAt,
      ...safeUser
    } = updatedUser;

    success(res, 200, safeUser, "Profile updated successfully");
    return;
  } catch (error) {
    console.error("Update user profile error:", error);
    fail(res, 500, "Failed to update profile");
  }
};

/**
 * Delete user account
 */
export const deleteAccount = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user?.userID;

    if (!userId) {
      fail(res, 401, "Authentication required");
      return;
    }

    // Check if user exists
    const userExists = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!userExists) {
      fail(res, 404, "User not found");
      return;
    }
    await prisma.connection.deleteMany({
      where: {
        OR: [{ userId1: userId }, { userId2: userId }],
      },
    });

    // Delete tags associations
    await prisma.user.update({
      where: { id: userId },
      data: {
        tags: {
          set: [],
        },
      },
    });

    // Delete the user
    await prisma.user.delete({
      where: { id: userId },
    });

    success(res, 200, null, "Account deleted successfully");
    return;
  } catch (error) {
    console.error("Delete account error:", error);
    fail(res, 500, "Failed to delete account");
  }
};
/**
 * Get recommended profiles based on matching criteria
 */
export const getRecommendedUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user?.userID;
    console.log(userId);

    if (!userId) {
      fail(res, 401, "Authentication required");
      return;
    }

    // Get current user profile details
    const currentUser = await prisma.user.findUnique({
      where: { id: userId },
      include: { tags: true },
    });
    console.log("Current user found:", !!currentUser);

    if (!currentUser) {
      fail(res, 404, "User not found");
      return;
    }

    // Get user's tags
    const userTagIds = currentUser.tags.map((tag) => tag.id);

    // Find users who share tags, profession or industry
    const recommendedUsers = await prisma.user.findMany({
      where: {
        id: { not: userId },
        showProfile: true,
        isVerified: "true",
        OR: [
          // Match by profession
          currentUser.profession ? { profession: currentUser.profession } : {},
          // Match by industry
          currentUser.industry ? { industry: currentUser.industry } : {},
          // Match by tags
          userTagIds.length > 0
            ? {
                tags: {
                  some: {
                    id: { in: userTagIds },
                  },
                },
              }
            : {},
        ],
      },
      include: {
        tags: true,
      },
      take: 10,
    });

    // Calculate match scores
    const usersWithScores = recommendedUsers.map((user) => {
      // Calculate tag overlap
      const userTags = user.tags.map((tag) => tag.id);
      const sharedTags = userTags.filter((tagId) => userTagIds.includes(tagId));
      const tagScore =
        userTagIds.length > 0 ? sharedTags.length / userTagIds.length : 0;

      // Calculate profession match
      const professionScore =
        user.profession === currentUser.profession ? 0.4 : 0;

      // Calculate industry match
      const industryScore = user.industry === currentUser.industry ? 0.3 : 0;

      // Calculate total score (max 100%)
      const totalScore = Math.round(
        (tagScore * 0.3 + professionScore + industryScore) * 100
      );

      // Remove sensitive data and add match score
      const {
        password,
        verificationToken,
        verificationTokenExpiresAt,
        ...safeUser
      } = user;

      return {
        ...safeUser,
        matchScore: Math.min(totalScore, 100), // Cap at 100%
      };
    });

    // Sort users by match score (highest first)
    usersWithScores.sort((a, b) => b.matchScore - a.matchScore);

    // Send the response
    success(
      res,
      200,
      usersWithScores,
      "Recommended profiles retrieved successfully"
    );
  } catch (error) {
    console.error("Get recommended users error:", error);
    fail(res, 500, "Failed to retrieve recommended users");
  }
};

export const markProfileComplete = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user?.userID;

    await prisma.user.update({
      where: { id: userId },
      data: { isProfileComplete: "true" },
    });

    res.status(200).json({
      success: true,
      message: "Profile marked as complete",
    });
  } catch (error) {
    console.error("Error marking profile complete:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred",
    });
  }
};
