import { Response } from "express";
import mongoose from "mongoose";
import { AuthRequest } from "../middlewares/auth.middleware.js";
import gigModel from "../models/gig.model.js";
import bidModel from "../models/bid.model.js";


interface CreateBidBody {
  gigId: string;
  message: string;
  price: number;
}


export const createBid = async (
  req: AuthRequest & { body: CreateBidBody },
  res: Response
) => {
  try {
    const { gigId, message, price } = req.body;

    if (!gigId || !message || !price) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Check gig exists and is open
    const gig = await gigModel.findById(gigId);
    if (!gig || gig.status !== "open") {
      return res.status(400).json({ message: "Gig is not available" });
    }

    // Prevent bidding on own gig
    if (gig.ownerId.toString() === req.user._id.toString()) {
      return res.status(400).json({ message: "You cannot bid on your own gig" });
    }

    const bid = await bidModel.create({
      gigId,
      freelancerId: req.user._id,
      message,
      price,
      status: "pending"
    });

    res.status(201).json({
      message: "Bid submitted successfully",
      bid
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

/* =========================
   GET BIDS FOR A GIG
========================= */
export const getBidsForGig = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const { gigId } = req.params;

    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const gig = await gigModel.findById(gigId);
    if (!gig) {
      return res.status(404).json({ message: "Gig not found" });
    }

    // Only owner can view bids
    if (gig.ownerId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Access denied" });
    }

    const bids = await bidModel.find({ gigId })
      .populate("freelancerId", "name email")
      .sort({ createdAt: -1 });

    res.json(bids);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

/* =========================
   HIRE A FREELANCER 
========================= */
export const hireBid = async (
  req: AuthRequest,
  res: Response
) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const { bidId } = req.params;

    if (!req.user) {
      await session.abortTransaction();
      return res.status(401).json({ message: "Unauthorized" });
    }

    const bid = await bidModel.findById(bidId).session(session);
    if (!bid) {
      await session.abortTransaction();
      return res.status(404).json({ message: "Bid not found" });
    }

    const gig = await gigModel.findById(bid.gigId).session(session);
    if (!gig) {
      await session.abortTransaction();
      return res.status(404).json({ message: "Gig not found" });
    }

    // Only gig owner can hire
    if (gig.ownerId.toString() !== req.user._id.toString()) {
      await session.abortTransaction();
      return res.status(403).json({ message: "Access denied" });
    }

    // Prevent double hire
    if (gig.status === "assigned") {
      await session.abortTransaction();
      return res.status(400).json({ message: "Gig already assigned" });
    }

    // Hire selected bid
    bid.status = "hired";
    await bid.save({ session });

    // Reject all other bids
    await bidModel.updateMany(
      { gigId: gig._id, _id: { $ne: bid._id } },
      { status: "rejected" },
      { session }
    );

    // Update gig status
    gig.status = "assigned";
    await gig.save({ session });

    await session.commitTransaction();

    res.json({
      message: "Freelancer hired successfully"
    });
  } catch (error) {
    await session.abortTransaction();
    res.status(500).json({ message: "Server error", error });
  } finally {
    session.endSession();
  }
};
