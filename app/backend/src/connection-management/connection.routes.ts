import { Router } from "express";
import {
  getUserConnections,
  sendConnectionRequest,
  acceptConnectionRequest,
  getNearbyUsers,
  getRecommendedUsers,
} from "./connection.controller";
import { verifyUserToken } from "../util/authenticateUser";
const router = Router();

router.get("/", verifyUserToken, getUserConnections);
router.post("/request", sendConnectionRequest);
router.post("/accept/:connectionId", verifyUserToken, acceptConnectionRequest);
// User discovery
router.get("/nearby", verifyUserToken, getNearbyUsers);
router.get("/recommended", verifyUserToken, getRecommendedUsers);

export default router;
