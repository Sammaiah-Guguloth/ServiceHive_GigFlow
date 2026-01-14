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
   GET ALL OPEN GIGS
========================= */
export const getGigs = async (
    req: AuthRequest & { query: GetGigsQuery },
    res: Response
  ) => {
    try {
      const { search } = req.query;
  
      const filter: any = { status: "open" };
  
      if (search) {
        filter.title = { $regex: search, $options: "i" };
      }
  
      const gigs = await gigModel.find(filter)
        .populate("ownerId", "name email")
        .sort({ createdAt: -1 });
  
      res.json(gigs);
    } catch (err) {
      res.status(500).json({ message: "Server error", err });
    }
  };