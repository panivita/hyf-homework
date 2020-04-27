const getCity = (tag) => {
  return tag.value.replace(/^\s+|\s+$/g, "");
};

const convertTimestamptoTime = (unixT) => {
  const dateObj = new Date(unixT * 1000);
  const hours = dateObj.getUTCHours();
  const minutes = dateObj.getUTCMinutes();

  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
};

const inputTag = document.getElementById("input");
inputTag.focus();
const btnTag = document.getElementById("get-weather");
const pTag = document.getElementById("error");
const ulTag = document.getElementById("weather-data");

const onClickHandler = () => {
  const city = getCity(inputTag);
  if (!city) {
    pTag.textContent = "First enter your city";
  } else {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4555a73df1a819f049cc845a8d9338bf`;
    //const url = `https://api.openweathermap.org/data/2.5/weather?zip=${city},DK&appid=4555a73df1a819f049cc845a8d9338bf`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        const mainData = result.main;
        const temp = (mainData.temp - 273.15).toFixed(1);
        const windData = result.wind;
        const cloudsData = result.clouds;
        const weatherData = result.weather[0];
        const sunData = result.sys;
console.log(sunData);
        const output = `
        <li>${result.name}</li>
        <li>${temp}°C</li>
        <li><i class="owf owf-${weatherData.id} owf-5x"></i>${
          weatherData.description
        }</li>
        <li>Wind ${windData.speed}m/s.</li>
        <li>Clouds ${cloudsData.all}%</li> 
        <li>Sunrise: ${convertTimestamptoTime(sunData.sunrise)}</li>
        <li>Sunset: ${convertTimestamptoTime(sunData.sunset)}</li>
        `;
        ulTag.innerHTML = output;
      });
  }
};
btnTag.addEventListener("click", onClickHandler);
