import { Router } from "express";
import { createGig, getGigs } from "../controllers/gig.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

/**
 * @route   GET /api/gigs
 * @desc    Get all open gigs (with search)
 * @access  Public
 */
router.get("/", getGigs);

/**
 * @route   POST /api/gigs
 * @desc    Create a new gig
 * @access  Private
 */
router.post("/", authMiddleware, createGig);

export default router;
