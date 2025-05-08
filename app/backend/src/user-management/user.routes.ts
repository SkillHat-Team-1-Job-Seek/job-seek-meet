import { Router } from "express";
import { verifyUserToken } from "../util/authenticateUser";
import {
  getAllUsers,
  updateUser,
  deleteAccount,
  getCurrentUserProfile,
  getUserById,
  getRecommendedUsers,
} from "./user.controller";
import { upload } from "../util/multer";

const router = Router();

// 1. SPECIFIC ROUTES FIRST
router.get("/me", verifyUserToken, getCurrentUserProfile);
router.get("/recommended", verifyUserToken, getRecommendedUsers);
router.get("/:id", getUserById);

router.get("/", getAllUsers);
router.patch("/", upload.single("profileImage"), verifyUserToken, updateUser);
router.delete("/", verifyUserToken, deleteAccount);

export default router;
