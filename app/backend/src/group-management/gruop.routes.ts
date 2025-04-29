import { Router } from "express";
import { createGroup, joinGroup } from "./group.controller";
import { verifyUserToken } from "../util/authenticateUser";

const router = Router();

router.post("/", verifyUserToken, createGroup);
router.post("/:groupId", verifyUserToken, joinGroup);
