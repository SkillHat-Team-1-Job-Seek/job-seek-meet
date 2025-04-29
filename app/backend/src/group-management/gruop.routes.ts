import { Router } from "express";
import { createGroup, joinGroup } from "./group.controller";
import { verifyUserToken } from "../util/authenticateUser";
import { upload } from "../util/multer";

const router = Router();

router.post("/", verifyUserToken, upload.single("groupImageUrl"), createGroup);
router.post("/:groupId", verifyUserToken, joinGroup);

export default router;
