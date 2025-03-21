async function checkWeather() {
  const inputValue = document.querySelector("#city-name").value.trim();
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}`;
  const apiKey = "9c0fffb2b26e49021600a6e34a2fc07c&units=metric";
  const imageSource = document.getElementById("weather-condition-images");
  try {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    if (!response.ok) {
      throw new Error("Could not find");
    }
    const data = await response.json();
    console.log(data);
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("temp").innerHTML =
      data.main.temp.toFixed(0) + "°C";
    document.getElementById("humidity-value").innerHTML =
      data.main.humidity + "%";
    document.getElementById("speed-value").innerHTML =
      data.wind.speed + "km/hr";
    if (data.weather[0].main === "Clear") {
      imageSource.src = "./Images/clear.png";
    } else if (data.weather[0].main === "Clouds") {
      imageSource.src = "./Images/clouds.png";
    } else if (data.weather[0].main === "Drizzle") {
      imageSource.src = "./Images/drizzle.png";
    } else if (data.weather[0].main === "mist") {
      imageSource.src = "./Images/mist.png";
    } else if (data.weather[0].main === "Rain") {
      imageSource.src = "./Images/rain.png";
    } else {
      imageSource.src = "./Images/snow.png";
    }
    document.querySelector(".hero").style.display = "block";
  } catch (error) {
    console.error(error);
  }
}

const searchBtn = document.querySelector("#search");
searchBtn.addEventListener("click", checkWeather);
