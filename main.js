const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".container");

search.addEventListener("click", () => {
  const APIkey = "5274c4b18a84d23789ca50d5f1037aea";
  const city = document.querySelector(".search-box input").value;

  if (city === "") return;

  fetch(
    " https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
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
    });
});
