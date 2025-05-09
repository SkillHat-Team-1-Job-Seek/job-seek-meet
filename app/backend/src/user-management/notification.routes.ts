import { Router } from "express";
import { getUserNotifications } from "./notifications.controller";
import { verifyUserToken } from "../util/authenticateUser";

const router = Router();

router.get("/", verifyUserToken, getUserNotifications);

export default router;
