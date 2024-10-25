import connectDB from "./db.js";
import mongoose from "mongoose";
connectDB();

const schema = new mongoose.Schema({ name: String, age: String, gender: String });

const Weather = mongoose.model('Weather', schema);


const small = new Weather({ name: 'Srikar', age: '19', gender:'Male' });
await small.save();

console.log("Saved successfully!");