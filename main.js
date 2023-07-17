const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".container");
// require("dotenv").config();

search.addEventListener("click", () => {
  const api_key = process.env.API_KEY;
  const city = document.querySelector(".search-box input").value;

  if (city === "") return;

  fetch(
    " https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API_key}"
  )
    .then((Response) => Response.json())
    .then((json) => {
      if (json.cod === "404") {
        container.style.height = "400px";
        weatherBox.style.display = "none";
        weatherDetails.style.display = "none";
        error404.style.display = "block";
        error404.classList.add("fadeIn");
        return;
      }
      error404.style.display = "none";
      error404.classList.remove("fadeIn");

      const image = document.querySelector(".weather-box img");
      const temperature = document.querySelector(".weather-box .temperature");
      const description = document.querySelector(".weather-box .description");
      const humidity = document.querySelector(
        ".weather-details .humidity span"
      );
      const wind = document.querySelector(".weather-details .wind span");

      switch (json.weather[0].main) {
        case "Clear":
          image.src =
            "https://images.unsplash.com/photo-1572003818138-19cf96ee15e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60";
          break;

        case "Rain":
          image.src =
            "https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJhaW4lMjBkcm9wc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60";
          break;

        case "Snow":
          image.src =
            "https://images.unsplash.com/photo-1608581796221-415be903abdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNub3dmbGFrZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";
          break;

        case "Clouds":
          image.src =
            "ihttps://images.unsplash.com/photo-1517685352821-92cf88aee5a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80";
          break;

        case "Haze":
          image.src =
            "https://images.unsplash.com/photo-1669454571665-b2f266ad8374?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhhenklMjBza3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";
          break;

        default:
          image.src =
            "https://plus.unsplash.com/premium_photo-1677593850639-9f1e14e4524b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60";
      }

      temperature.innerHTML = `${parseInt(json.main.temp)}<span>℉</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}Mp/h`;

      weatherBox.style.display = "";
      weatherDetails.style.display = "";
      weatherBox.classList.add("fadeIn");
      weatherDetails.classList.add("fadeIn");
      container.style.height = "590px";
    });
});
