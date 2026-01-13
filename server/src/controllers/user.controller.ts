import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";


// SEND TOKEN FUNCTION
const sendToken = (res: Response, userId: string) => {
    const token = jwt.sign(
      { id: userId },
      process.env.JWT_SECRET as string,
      { expiresIn: "7d" }
    );
  
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
  };


  // REGISTER CONTROLLER
  export const register = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;
  
      // Validation
      if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      // If user exists
      const existingUser = await userModel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }
  
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create user
      const user = await userModel.create({
        name,
        email,
        password: hashedPassword
      });
  
      // Set JWT cookie
      sendToken(res, user._id.toString());
  
      res.status(201).json({
        message: "User registered successfully",
        user: {
          id: user._id,
          name: user.name,
          email: user.email
        }
      });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  };


  // LOGIN CONTROLLER
  export const login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
  
      // Validation
      if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      // Check user
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
  
      // Check password
      const isMatch = await bcrypt.compare(password, user.password as string);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
  
      // Set JWT cookie
      sendToken(res, user._id.toString());
  
      res.json({
        message: "Login successful",
        user: {
          id: user._id,
          name: user.name,
          email: user.email
        }
      });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  };