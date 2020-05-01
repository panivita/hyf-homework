mapboxgl.accessToken =
  "pk.eyJ1IjoidmljdG9yaWEta3VzaCIsImEiOiJjazlpd3kwYm4wMnRvM25wOHQzYzZ0dWU2In0.vPB-ZEW7LHcbhuaEISB3Sg";
const mapApiUrl =
  "https://api.openweathermap.org/data/2.5/weather?appid=4555a73df1a819f049cc845a8d9338bf";
const googleKey = "AIzaSyDp2HzVGHCdy7g_hErhpPWxIo2hyA9nS4U";

const getCity = (tag) => {
  return tag.value.replace(/^\s+|\s+$/g, ""); //Find as many whitespace characters (spaces, tabs and line breaks)from the beginning of the string as possible or as many whitespace characters from the end as possible.
  //global searching, which allows multiple replacements in the beginning and the end of the string.
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
const photoPlaceTag = document.getElementById("place-photo");
const mainTag = document.getElementById("main");

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

const photoSearch = (lat, lon, radius) => {
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${googleKey}&location=${lat},${lon}&radius=${radius}`;
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

const renderImage = (result) => {
  const { lon, lat } = result.coord;
  photoSearch(lat, lon, 1).then((photoReference) => {
    const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${googleKey}`;
    main.style.cssText = `
    background: url(${url});
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    `;
  });
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

const renderError = () => {
  pTag.textContent = "City not found";
};

const clearError = () => {
  pTag.textContent = "";
};

const saveCityName = (result) => {
  localStorage.setItem("city", inputTag.value);
  return result;
};

const request = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then(renderResult)
    .then(renderMap)
    .then(renderImage)
    .then(saveCityName)
    .then(clearError)
    .catch(renderError);
};

const onClickHandler = () => {
  const city = getCity(inputTag);
  if (!city) {
    renderError();
  } else {
    const url = `${mapApiUrl}&q=${city}`;
    request(url);
  }
};
btnTag.addEventListener("click", onClickHandler);

const onKeyUpEnter = () => {
  if (event.keyCode === 13) {
    onClickHandler();
  }
};
inputTag.addEventListener("keyup", onKeyUpEnter);

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

if (localStorage.getItem("city")) {
  inputTag.value = localStorage.getItem("city");
  onClickHandler();
}
