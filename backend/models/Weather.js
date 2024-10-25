import mongoose from 'mongoose';

const weatherSchema = new mongoose.Schema({
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  summary: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Weather = mongoose.model('Weather', weatherSchema);

export default Weather;
