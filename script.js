const apiurl = "https://api.openweathermap.org/data/2.5/weather?";
const lat = "14.4749"; // Nallacheruvupalle's approximate latitude
const lon = "78.8242"; // Nallacheruvupalle's approximate longitude
const apikey = "e793b416da0ee280964693086592b986";

async function getWeather(lat, lon) {
    const response = await fetch(`${apiurl}lat=${lat}&lon=${lon}&units=metric&appid=${apikey}`);
    if (!response.ok) {
        throw new Error("Location not found");
    }
    const data = await response.json();
    console.log(data);

    // document.querySelector(".city").innerHTML = data.name;
    // document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    // document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    // document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

getWeather(lat, lon);
