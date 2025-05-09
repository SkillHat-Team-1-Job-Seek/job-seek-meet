import { Router } from "express";
import {
  createGroup,
  joinGroup,
  getAllGroups,
  getGroupsForUser,
} from "./group.controller";
import { verifyUserToken } from "../util/authenticateUser";
import { upload } from "../util/multer";

const router = Router();

router.get("/all", getAllGroups);
router.get("/my", verifyUserToken, getGroupsForUser);
router.post("/", verifyUserToken, upload.single("groupImageUrl"), createGroup);
router.post("/:groupId", verifyUserToken, joinGroup);

export default router;
