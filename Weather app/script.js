const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const weatherImg = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");

async function checkWeather(city){
    const apiKey = "";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const weatherData = await fetch(`${URL}`).then(response => response.json());

    console.log(weatherData);
}

searchBtn.addEventListener("click", () => {
    checkWeather(inputBox.value);
})
