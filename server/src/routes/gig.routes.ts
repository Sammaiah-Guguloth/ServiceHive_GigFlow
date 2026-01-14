import { Router } from "express";
import { createGig, getGigs } from "../controllers/gig.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

/**
 * @route   GET /api/gigs
 * @desc    Get  gigs (with search and also mine)
 * @access  Public
 */
router.get("/", authMiddleware , getGigs);

/**
 * @route   POST /api/gigs
 * @desc    Create a new gig
 * @access  Private
 */
router.post("/", authMiddleware, createGig);

export default router;
