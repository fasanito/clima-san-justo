// script.js

// Function to fetch weather data
async function fetchWeather(city) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Weather data not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather:', error);
    }
}

// Function to display weather data
function displayWeather(data) {
    const weatherContainer = document.getElementById('weather');
    weatherContainer.innerHTML = `<h2>${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} °C</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
}

// Example usage
fetchWeather('Buenos Aires'); // Call this function with a city name