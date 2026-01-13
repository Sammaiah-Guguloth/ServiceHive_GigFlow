
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectToDB from "./config/connectToDB.js";

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
  }));
  app.use(express.json());
  app.use(cookieParser());
  
// Test route
app.get("/", (req, res) => {
    res.send("GigFlow API is running");
  });

connectToDB().then(() => {
    app.listen(PORT , () => {
        console.log("Server is running on PORT : " , PORT );
    })
})