import { AuthRequest } from "../middlewares/auth.middleware.js";
import {Response} from "express";
import gigModel from "../models/gig.model.js";

interface CreateGigBody {
    title: string;
    description: string;
    budget: number;
}

interface GetGigsQuery {
    search?: string;
    mine?:string
}

/* =========================
   CREATE GIG CONTROLLER
========================= */
export const createGig = async (
    req : AuthRequest & {body : CreateGigBody},
    res : Response
) => {
    try {
        const { title, description, budget } = req.body;
    
        // Validation
        if (!title || !description || !budget) {
          return res.status(400).json({ message: "All fields are required" });
        }
    
        if (!req.user) {
          return res.status(401).json({ message: "Unauthorized" });
        }
    
        const gig = await gigModel.create({
          title,
          description,
          budget,
          ownerId: req.user._id,
          status: "open"
        });
    
        res.status(201).json({
          message: "Gig created successfully",
          gig
        });
      } catch (err) {
        res.status(500).json({ message: "Server error", err });
      }
};


/* =========================
   GET GIGS
========================= */
export const getGigs = async (
  req: AuthRequest & { query: GetGigsQuery },
  res: Response
) => {
  try {
    const { search, mine } = req.query;

    const filter: any = {};

    const isMine = mine === "true";

    // ✅ Browse gigs
    if (!isMine) {
      filter.status = "open";

      // EXCLUDE gigs created by the same user
      filter.ownerId = { $ne: req.user?._id };
    }

    // ✅ My gigs
    if (isMine) {
      filter.ownerId = req.user?._id;
    }

    // ✅ Search (works for both cases)
    if (search) {
      filter.title = { $regex: search, $options: "i" };
    }

    const gigs = await gigModel
      .find(filter)
      .sort({ createdAt: -1 });

    res.status(200).json({ gigs });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

