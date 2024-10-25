async function getCurrentInfo(lat, lon, API_KEY) {
    if (!lat || !lon) {
        return { error: "Latitude and longitude are required" };
    }

    const link = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;


    try {
        const response = await fetch(link);
        if (!response.ok) throw new Error(`Request failed: ${response.status}`);

        const json_answer = await response.json();
        return json_answer;
    } catch (error) {
        return { "status": error.message };
    }
}

export default getCurrentInfo;