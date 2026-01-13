import {Request , Response , NextFunction} from "express";
import { IUser } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

export interface AuthRequest extends Request {
    user ?: IUser;
}

const authMiddleware = async (
    req : AuthRequest,
    res : Response,
    next : NextFunction,
) => {
    try {
        const token = req.cookies.token;
    
        if (!token) {
          return res.status(401).json({ message: "Not authorized, no token" });
        }
    
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
          id: string;
        };
    
        const user = await userModel.findById(decoded.id).select("-password");
    
        if (!user) {
          return res.status(401).json({ message: "User not found" });
        }
    
        req.user = user;
        next();
      } catch (err) {
        return res.status(401).json({ message: "Invalid or expired token" });
      }
};

export default authMiddleware;