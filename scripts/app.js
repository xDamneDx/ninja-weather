const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");
const forecast = new Forecast();

const updateUI = ({ cityDetails, weather }) => {
  details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${Math.round(weather.Temperature.Metric.Value)}</span>
        <span>&deg;C</span>
    </div>
    `;

  const timeSrc = weather.IsDayTime ? "img/day.svg" : "img/night.svg";
  time.setAttribute("src", timeSrc);

  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = cityForm.city.value.trim();
  localStorage.setItem("NinjaWeather_City", city);
  cityForm.reset();

  forecast.updateCity(city).then((data) => updateUI(data));
});

if (localStorage.getItem("NinjaWeather_City")) {
  forecast
    .updateCity(localStorage.getItem("NinjaWeather_City"))
    .then((data) => updateUI(data));
}
