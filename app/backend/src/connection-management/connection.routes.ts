import { Router } from "express";
import { verifyUserToken } from "../util/authenticateUser";
import {
  sendConnectionRequest,
  getUserConnections,
  getNearbyUsers,
  acceptConnectionRequest,
} from "./connection.controller";
const router = Router();

router.get("/", verifyUserToken, getUserConnections);
router.post("/request", verifyUserToken, sendConnectionRequest);
router.post("/accept/:senderId", verifyUserToken, acceptConnectionRequest);

// User discovery
router.get("/nearby", verifyUserToken, getNearbyUsers);

export default router;
