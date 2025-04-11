import Groq from 'groq-sdk';

async function summarizeWeather(weather_resp, GROQ_API_KEY) {
    const climate = weather_resp.weather[0].main; // Climate (Sunny, Rain, Cloudy, etc.)
    const climate_description = weather_resp.weather[0].description; // Description
    const climate_kelvin = weather_resp.main.temp; // Temperature in Kelvin
    const climate_celsius = climate_kelvin - 273.0;
    const climate_kelvin_feels_like = weather_resp.main.feels_like; // Temperature feels like
    const climate_temp_min = weather_resp.main.temp_min; // Minimum temperature
    const climate_temp_max = weather_resp.main.temp_max; // Maximum temperature
    const climate_pressure = weather_resp.main.pressure; // Atmospheric pressure
    const climate_humidity = weather_resp.main.humidity; // Humidity percentage
    const climate_sea_level = weather_resp.main.sea_level; // Sea level pressure
    const climate_grnd_level = weather_resp.main.grnd_level; // Ground level pressure
    const climate_dt_unix = weather_resp.dt; // Timestamp of the data
    const climate_city = weather_resp.name; // City name
    const climate_timezone = weather_resp.timezone; // Timezone offset in seconds
    const climate_country = weather_resp.sys.country; // Country code
    const groq = new Groq({apiKey: GROQ_API_KEY});
    
    const weatherSummaryPrompt = `
        Look at this weather report for ${climate_city}, ${climate_country}:
        
        The current weather condition is ${climate} with a description of "${climate_description}". 
        The temperature is currently ${climate_celsius.toFixed(1)}°C (or ${climate_kelvin}K), and it feels like ${(
            climate_kelvin_feels_like - 273.0
        ).toFixed(1)}°C. 

        The minimum temperature today is expected to be ${(
            climate_temp_min - 273.0
        ).toFixed(1)}°C, while the maximum temperature could reach ${(
            climate_temp_max - 273.0
        ).toFixed(1)}°C. 

        Atmospheric pressure stands at ${climate_pressure} hPa, and the humidity level is at ${climate_humidity}%.
        
        As for the wind, it is blowing at a speed of ${weather_resp.wind.speed} m/s from the ${weather_resp.wind.deg}° direction.
        
        Please provide any additional insights on the weather for today and suggestions based on the weather.
    `;

    return groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: weatherSummaryPrompt,
          },
        ],
        model: "llama3-8b-8192",
    });
}


export default summarizeWeather;