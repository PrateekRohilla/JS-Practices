const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const weatherImg = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");

const invalidLocation = document.querySelector(".invalid-location");

const weatherBody = document.querySelector(".weather-body");

async function checkWeather(city){
    const apiKey = config.weatherAPIKey;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const weatherData = await fetch(`${URL}`).then(response => response.json());
    
    //check for invalid locations
    if(weatherData.cod === `404`){
        invalidLocation.style.display = "flex";
        weatherBody.style.display = "none";
        return;
    }

    //show images/data according to input
    invalidLocation.style.display = "none";
    weatherBody.style.display = "flex";

    //converting temperature to degree from kelvin
    temperature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}°C`;
    
    description.innerHTML = `${weatherData.weather[0].description}`;
    
    humidity.innerHTML = `${weatherData.main.humidity}%`;

    windSpeed.innerHTML = `${weatherData.wind.speed}Km/H`;

    //shows image as per weather
    switch(weatherData.weather[0].main){
        case 'Clouds':
            weatherImg.src = "/Weather app/assets/cloud.png";
                break;
        case 'Clear':
            weatherImg.src = "/Weather app/assets/clear.png";
                break;
        case 'Rain':
            weatherImg.src = "/Weather app/assets/rain.png";
                break;
        case 'Mist':
            weatherImg.src = "/Weather app/assets/mist.png";
                break;
        case 'Snow':
            weatherImg.src = "/Weather app/assets/snow.png";
                break;
        
    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(inputBox.value);
})
