import { Router } from "express";
import { verifyUserToken } from "../util/authenticateUser";
import {
  sendConnectionRequest,
  getUserConnections,
  getNearbyUsers,
  acceptConnectionRequest,
  getRecommendedUsers,
} from "./connection.controller";
const router = Router();

router.get("/", verifyUserToken, getUserConnections);
router.post("/request", sendConnectionRequest);
router.post("/accept/:connectionId", verifyUserToken, acceptConnectionRequest);
// User discovery
router.get("/nearby", verifyUserToken, getNearbyUsers);
router.get("/recommended", verifyUserToken, getRecommendedUsers);

export default router;
