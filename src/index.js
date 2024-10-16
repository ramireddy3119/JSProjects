const apikey = "e793b416da0ee280964693086592b986";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function getWeather(city) {
    const response = await fetch(`${apiurl}${city}&appid=${apikey}`);
    if (!response.ok) {
        throw new Error("City not found");
    }
    const data = await response.json();
    console.log(data);
    if(data.weather[0].main === "Clear") {
        weatherIcon.src = "../images/clear.png";
    } else if(data.weather[0].main === "Clouds") {
        weatherIcon.src = "../images/clouds.png";
    } else if(data.weather[0].main === "Rain") {
        weatherIcon.src = "../images/rain.png";
    } else if(data.weather[0].main === "Snow") {
        weatherIcon.src = "../images/snow.png";
    } else if(data.weather[0].main === "Mist") {
        weatherIcon.src = "../images/mist.png";
    } else if(data.weather[0].main === "Thunderstorm") {
        weatherIcon.src = "../images/thunderstorm.png";
    } else if(data.weather[0].main === "Drizzle") { 
        weatherIcon.src = "../images/drizzle.png";
    } else if(data.weather[0].main === "Haze") {
        weatherIcon.src = "../images/haze.png";
    } else {    
        weatherIcon.src = "../images/unknown.png";
    }
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

searchBtn.addEventListener("click", () => {
    getWeather(searchBox.value);
});
