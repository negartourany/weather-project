function displayTemp(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let weatherStat = document.querySelector("#weather-stat");
  weatherStat.innerHTML = response.data.weather[0].description;
  let cityName = document.querySelector("#cityName");
  cityName.innerHTML = response.data.name;
  let humid = document.querySelector("#humid");
  humid.innerHTML = response.data.main.humidity;
  let windStat = document.querySelector("#wind-stat");
  windStat.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "654b4feb287b99dec3603cc2d01ca282";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemp);
