// =============================
// OpenWeather API Key
// =============================

// Replace with your API key
const apiKey = "a0a75765f5d14f8a8e83afbfa7c85142";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

const weather = document.getElementById("weather");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

const temperature = document.getElementById("temperature");
const city = document.getElementById("city");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const feelsLike = document.getElementById("feelsLike");
const pressure = document.getElementById("pressure");
const visibility = document.getElementById("visibility");
const weatherIcon = document.getElementById("weatherIcon");

// =============================
// Search Button
// =============================

searchBtn.addEventListener("click", () => {
    getWeather(cityInput.value.trim());
});

// =============================
// Enter Key Support
// =============================

cityInput.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {

        getWeather(cityInput.value.trim());

    }

});

// =============================
// Fetch Weather
// =============================

async function getWeather(cityName){

    if(cityName === ""){

        alert("Please enter a city name.");

        return;
    }

    loading.style.display = "block";
    weather.style.display = "none";
    error.style.display = "none";

    try{

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
        );

        const data = await response.json();

        loading.style.display = "none";

        if(data.cod != 200){

            error.style.display = "block";

            return;
        }

        displayWeather(data);

    }

    catch(err){

        loading.style.display = "none";

        error.innerHTML = "Unable to fetch weather.";

        error.style.display = "block";

        console.log(err);

    }

}
// =============================
// Display Weather Data
// =============================

function displayWeather(data) {

    weather.style.display = "block";

    temperature.innerHTML = `${Math.round(data.main.temp)}°C`;

    city.innerHTML = `${data.name}, ${data.sys.country}`;

    description.innerHTML = data.weather[0].description;

    humidity.innerHTML = data.main.humidity + "%";

    wind.innerHTML = data.wind.speed + " km/h";

    feelsLike.innerHTML = Math.round(data.main.feels_like) + "°C";

    pressure.innerHTML = data.main.pressure + " hPa";

    visibility.innerHTML = (data.visibility / 1000).toFixed(1) + " km";

    // Weather Icon
    const iconCode = data.weather[0].icon;

    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

}

// =============================
// Default Weather
// =============================

// Displays weather for Hyderabad when the page loads.

window.onload = () => {

    getWeather("Hyderabad");

};