import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectToDB from "./config/connectToDB.js";
import userRoutes from "./routes/user.routes.js";
import gigRoutes from "./routes/gig.routes.js";
import bidRoutes from "./routes/bid.routes.js"; 
import http from "http";
import { initSocket } from "./socket/index.js";


const app = express();
const server = http.createServer(app);
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


// Routes 
app.use("/api/v1/auth" , userRoutes);
app.use("/api/v1/gigs" , gigRoutes);
app.use("/api/v1/bids", bidRoutes);

connectToDB().then(() => {

    // initialize socket
    initSocket(server);

    server.listen(PORT , () => {
        console.log("Server is running on PORT : " , PORT );
    })
})