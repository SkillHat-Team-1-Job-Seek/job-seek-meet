import { Router } from "express";
import { login, logout, signup } from "./auth.controller";

const router = Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);
