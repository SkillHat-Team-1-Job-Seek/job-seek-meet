import { Router } from "express";
import { login, logout, signup, verifyEmail } from "./auth.controller";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

//verify mail
router.post("/verify", verifyEmail);

export default router;
