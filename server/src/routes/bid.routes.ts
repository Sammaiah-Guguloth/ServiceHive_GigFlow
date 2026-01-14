import { Router } from "express";
import {
  createBid,
  getBidsForGig,
  hireBid
} from "../controllers/bid.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

/**
 * @route   POST /api/v1/bids
 * @desc    Submit a bid for a gig
 * @access  Private
 */
router.post("/", authMiddleware, createBid);

/**
 * @route   GET /api/v1/bids/:gigId
 * @desc    Get all bids for a specific gig (gig owner only)
 * @access  Private
 */
router.get("/:gigId", authMiddleware, getBidsForGig);

/**
 * @route   PATCH /api/v1/bids/:bidId/hire
 * @desc    Hire a freelancer for a gig (atomic operation)
 * @access  Private
 */
router.patch("/:bidId/hire", authMiddleware, hireBid);

export default router;
