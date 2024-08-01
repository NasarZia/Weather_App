const apikey = "98aa9656a1daa1cd155b45477dc4881d"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchbox = document.querySelector(".search input");
const searchbutton = document.querySelector(".search button");

const weathericon = document.querySelector(".weather_icon");

async function getWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weathericon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weathericon.src = "images/clear.png";
        }
        if (data.weather[0].main == "Rain") {
            weathericon.src = "images/rain.png";
        }
        if (data.weather[0].main == "Drizzle") {
            weathericon.src = "images/drizzle.png";
        }
        if (data.weather[0].main == "Mist") {
            weathericon.src = "images/mist.png";
        }
        if (data.weather[0].main == "Snow") {
            weathericon.src = "images/snow.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}

searchbutton.addEventListener("click", () => {
    getWeather(searchbox.value);
})

