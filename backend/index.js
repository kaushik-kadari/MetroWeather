import express from 'express';
import dotenv from 'dotenv';
import getCurrentInfo from './modules/getCurrentInfo.js';
import getFiveDayInfo from './modules/getFiveDayInfo.js';
import summarizeWeather from './modules/summarizeWeather.js';
import connectDB from './setup/db.js';
import Weather from './models/Weather.js';

const app = express();

connectDB();

const PORT = 3000;
dotenv.config();

app.use(express.json());

// Root Directory
app.get("/", (req, res) => {
    res.send("Hello, World");
});

// Get information by giving input as lat and long.
app.post("/getCurrentInfo", async (req, res) => {
    const lat = req.body.lat;
    const lon = req.body.lon;
    const API_KEY = process.env.API_KEY;

    const result = await getCurrentInfo(lat,lon,API_KEY);

    res.send(result);
});

// Get 5 day summary by giving input as lat and long.
app.post("/getFiveDayInfo", async (req, res)=>{
    const lat = req.body.lat;
    const lon = req.body.lon;
    const API_KEY = process.env.API_KEY;

    const response = await getFiveDayInfo(lat,lon,API_KEY);

    res.send(response);
});

// AI Weather Analysis

app.post("/summarizeWeather", async (req, res) => {
    try {
        const lat = req.body.lat;
        const lon = req.body.lon;
        const API_KEY = process.env.API_KEY;

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const existingWeather = await Weather.findOne({
            latitude: lat,
            longitude: lon,
            date: { $gte: today } 
        });

        if (existingWeather) {
            return res.send({ "response": existingWeather.summary });
        }

        const weather_resp = await getCurrentInfo(lat, lon, API_KEY);

        const chatCompletion = await summarizeWeather(weather_resp);
        const summary = chatCompletion.choices[0]?.message?.content || "";

        const weatherData = new Weather({
            latitude: lat,
            longitude: lon,
            summary: summary
        });

        await weatherData.save();

        res.send({ "response": summary });

    } catch (error) {
        console.error(error);
        res.status(500).send("Error summarizing weather or saving to the database");
    }
});




app.listen(PORT, () => {
    console.log(`App listening to port: ${PORT}`);
});