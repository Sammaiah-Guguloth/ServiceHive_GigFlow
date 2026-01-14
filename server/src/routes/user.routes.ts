
import { Router } from "express";
import { register, login, logout, getMe } from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

/**
 * @route   POST /api/v1/auth/register
 * @desc    Register a new user
 * @access  Public
 */
router.post("/register", register);

/**
 * @route   POST /api/v1/auth/login
 * @desc    Login user
 * @access  Public
 */
router.post("/login", login);

/**
 * @route   POST /api/v1/auth/logout
 */
router.post("/logout", authMiddleware , logout);

/**
 * @route   POST /api/v1/auth/me
 */
router.get("/me", authMiddleware, getMe);


export default router;
