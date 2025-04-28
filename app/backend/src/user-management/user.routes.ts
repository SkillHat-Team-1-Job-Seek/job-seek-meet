import { Router } from "express";
import {
  getAllUsers,
  updateUser,
  deleteAccount,
  getCurrentUserProfile,
  getUserById,
} from "./user.controller";
import { upload } from "../util/multer";

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.get("/me", getCurrentUserProfile)

router.patch("/", upload.single("profileImage"), updateUser);
router.delete("/:id", deleteAccount);

export default router;
