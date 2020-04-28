mapboxgl.accessToken =
  "pk.eyJ1IjoidmljdG9yaWEta3VzaCIsImEiOiJjazlpd3kwYm4wMnRvM25wOHQzYzZ0dWU2In0.vPB-ZEW7LHcbhuaEISB3Sg";
const mapApiUrl =
  "https://api.openweathermap.org/data/2.5/weather?appid=4555a73df1a819f049cc845a8d9338bf";

const getCity = (tag) => {
  return tag.value.replace(/^\s+|\s+$/g, "");
};

const convertTimestamptoTime = (unixT) => {
  const dateObj = new Date(unixT * 1000);
  const hours = dateObj.getUTCHours();
  const minutes = dateObj.getUTCMinutes();

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
};

const inputTag = document.getElementById("input");
inputTag.focus();
const hTag = document.querySelector("h1");
const btnTag = document.getElementById("get-weather");
const btnPos = document.getElementById("get-position");
const pTag = document.getElementById("error");
const ulTag = document.getElementById("weather-data");

const renderResult = (result) => {
  const { name, main, wind, clouds, weather, sys } = result;
  const temp = (main.temp - 273.15).toFixed(1);
  inputTag.value = name;
  const output = `
    <li>${temp}°C</li>
    <li><i class="owf owf-${weather[0].id} owf-5x"></i></li>
    <li>${weather[0].description}</li>
    <li>Wind ${wind.speed}m/s.</li>
    <li>Clouds ${clouds.all}%</li> 
    <li>Sunrise: ${convertTimestamptoTime(sys.sunrise)}</li>
    <li>Sunset: ${convertTimestamptoTime(sys.sunset)}</li>
    `;
  ulTag.innerHTML = output;
  hTag.innerHTML = name;
  return result;
};

const renderMap = (result) => {
  const { lon, lat } = result.coord;
  const map = new mapboxgl.Map({
    container: "map",
    center: [lon, lat],
    zoom: 10,
    style: "mapbox://styles/mapbox/streets-v11",
  });
  return result;
};

const request = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then(renderResult)
    .then(renderMap);
};

const onClickHandler = () => {
  const city = getCity(inputTag);
  if (!city) {
    pTag.textContent = "First enter your city";
  } else {
    const url = `${mapApiUrl}&q=${city}`;
    request(url);
  }
};
btnTag.addEventListener("click", onClickHandler);

const onClickWeather = () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const url = `${mapApiUrl}&lat=${lat}&lon=${lon}`;
      request(url);
    });
  }
};
btnPos.addEventListener("click", onClickWeather);
if ("localstorage" in navigator) {
}
// const url = `${mapApiUrl}&zip=${city},DK`;

const key = "AIzaSyCbPi7qMkyWrULboFoXykhXXNVM97qiDto";
const photoSearch = (l1, l2, l3) => {
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${key}&location=${l1},${l2}&radius=${l3}`;
  return fetch(url)
    .then((res) => res.json())
    .then((result) => {
      return result.results
        .map(({ photos }) => photos)
        .reduce((a, c) => a.concat(c), [])
        .map(({ photo_reference }) => photo_reference);
    })
    .then((photo) => {
      const randomPhoto = Math.floor(Math.random() * photo.length);
      return photo[randomPhoto];
    });
};

photoSearch(49.246292, -123.116226, 500000).then((result) => {
  const photoReference = result;
  const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${key}`;
  fetch(url)
    .then((res) => res.json())
    .then((result) => {
      const body = document.querySelector("body");
      body.innerHTML = result;
    });
});
