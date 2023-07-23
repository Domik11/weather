const p = new Promise(function (resolve, reject) {
    function getWeatherData(cityName) {
        async function fetchData() {
            const geocodingUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${cityName}`;
            let geocodingResponse = await fetch(geocodingUrl);
            let geocodingData = await geocodingResponse.json();

            // Проверка наличия результатов геокодинга
            if (geocodingData.length === 0) {
                throw new Error("Город не найден.");
            }

            // Получение координат города
            const latitude = geocodingData[0].lat;
            const longitude = geocodingData[0].lon;

            // Запрос для получения погодных данных
            const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=surface_pressure,rain,windspeed_10m,showers,snowfall,weathercode,uv_index,temperature_2m,apparent_temperature,precipitation,rain,snowfall,cloudcover&daily=weathercode,temperature_2m_max,temperature_2m_min,uv_index_max,rain_sum&windspeed_unit=ms&timezone=GMT&forecast_days=16&timezone=Europe%2FMoscow`;

            let weatherResponse = await fetch(weatherUrl);
            let data = await weatherResponse.json();

            resolve({ cityName, data });
        }

        fetchData().catch((error) => {
            reject(error);
        });
    }

    // Usage example: Change "London" to the desired city name
    const cityName = "Moscow";
    getWeatherData(cityName);
    
});

export default p;