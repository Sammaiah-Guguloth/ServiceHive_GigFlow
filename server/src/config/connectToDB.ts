import mongoose from "mongoose";

const connectToDB = async () : Promise<void> => {
    try {
        const mongoURI = process.env.MONGO_URI;

        if (!mongoURI) {
        throw new Error("MONGO_URI is not defined in environment variables");
        }

        await mongoose.connect(mongoURI);
    console.log("MongoDB connected successfully");
    }
    catch(err) {
        console.error("Error while connecting to MongoDB:", err);
    }
}

export default connectToDB;