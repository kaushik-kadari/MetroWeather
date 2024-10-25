import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);

        const res = await mongoose.connect(
            process.env.MONGODB_CLIENT
        );
  
        if (res) {
            console.log("Connected to MongoDB successfully");
        }
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};
 
export default connectDB;