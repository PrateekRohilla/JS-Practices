const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const weatherImg = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");

async function checkWeather(city){
    const apiKey = config.weatherAPIKey;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const weatherData = await fetch(`${URL}`).then(response => response.json());
    
    //converting temperature to degree from kelvin
    temperature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}°C`;
    
    description.innerHTML = `${weatherData.weather[0].description}`;
    
    humidity.innerHTML = `${weatherData.main.humidity}%`;

    windSpeed.innerHTML = `${weatherData.wind.speed}Km/H`;

    

    console.log(weatherData);
}

searchBtn.addEventListener("click", () => {
    checkWeather(inputBox.value);
})
