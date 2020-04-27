//1. Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded
const secondLog = () => {
  console.log("Called after 2.5 seconds");
};
setTimeout(secondLog, 2500);

//2. Create a function that takes 2 parameters: delay and stringToLog.
//Calling this function should log out the stringToLog after delay seconds.
//Call the function you have created with some different arguments.
const logger = (delay, stringToLog) =>
  setTimeout(() => {
    console.log(stringToLog);
  }, delay * 1000);
logger(5, "This string logget after 5 seconds");
logger(3, "This string logget after 3 seconds");

//3. Create a button in html. When clicking this button log out the text:
//Called after 5 seconds 5 seconds after the button is clicked.
const btnElement = document.getElementById("button1");
btnElement.addEventListener("click", () => logger(5, "called after 5 seconds"));

//4. Create two functions and assign them to two different variables.
//One function logs out Earth, the other function logs out Saturn.
//Now create a new third function that has one parameter: planetLogFunction.
//The only thing the third function should do is call the provided parameter function.
//Try call the third function once with the Earth function and once with the Saturn function.
const earthLogger = () => console.log("Earth");
const saturnLogger = () => console.log("Saturn");
const planetLogger = (planetLog) => planetLog();
planetLogger(earthLogger);
planetLogger(saturnLogger);

//5. Create a button with the text called "Log location". When this button is clicked the location
//(latitude, longitude) of the user should be logged out using this browser api.
const status = document.getElementById("status");
const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");
const btnElement2 = document.getElementById("button2");
const findLocation = () => {
  if (!navigator.geolocation) {
    status.textContent = "Unable to retrieve your location";
  } else {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitudePosition = position.coords.latitude;
      const longitudePosition = position.coords.longitude;
      latitude.href = `https://www.openstreetmap.org/#map=18/${latitudePosition}`;
      longitude.href = `https://www.openstreetmap.org/#map=18/${longitudePosition}`;
      latitude.innerHTML = `<b>This is the latitude</b> ${latitudePosition} °`;
      longitude.innerHTML = `<b>This is the longitude</b> ${longitudePosition} °`;
    });
  }
};

btnElement2.addEventListener("click", findLocation);

// 6. Optional Now show that location on a map using fx the Google maps api
const findLocationMap = () => {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6,
  });
  const infoWindow = new google.maps.InfoWindow();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent("Location found.");
      infoWindow.open(map);
      map.setCenter(pos);
    });
  } else {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
  }
};
const btnElement3 = document.getElementById("button3");
btnElement3.addEventListener("click", () => findLocationMap);

//7. Create a function called runAfterDelay. It has two parameters: delay and callback.
//When called the function should wait delay seconds and then call the provided callback function.
//Try and call this function with different delays and different callback functions
const runAfterDelay = (delay, callback) =>
  setTimeout(() => {
    callback();
  }, delay * 1000);
runAfterDelay(4, () => {
  console.log("should be logged after 4 seconds");
});
runAfterDelay(6, () => {
  console.log("should be logged after 6 seconds");
});

//8. Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds.
//If a double click has been detected, log out the text: "double click!"
window.addEventListener("dblclick", () => console.log("double click!"));

//9. Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean,
//logFunnyJoke - function and logBadJoke - function. If you set tellFunnyJoke to true it should call the
//logFunnyJoke function that should log out a funny joke. And vice versa.

const getRandomJoke = (jokes) => {
  const random = Math.floor(Math.random() * jokes.length);
  return jokes[random];
};

const btnFunnyJoke = document.getElementById("funny-joke");
const btnBadJoke = document.getElementById("bad-joke");
const pTag = document.getElementById("joke");
const funnyJokes = [
  "Doctor: I am sorry but you suffer from a terminal illness and have only 10 to live.Patient: What do you mean, 10? 10 what? Months? Weeks?!Doctor: Nine",
  "Job interviewer: And where would you see yourself in five years time Mr. Jeffries? Mr. Jeffries: Personally I believe my biggest weakness is in listening.",
  "I got another letter from this lawyer today. It said “Final Notice”. Good that he will not bother me anymore.",
  " dreamed I was forced to eat a giant marshmallow. When I woke up, my pillow was gone.",
  "One of the most wonderful things in life is to wake up and enjoy a cuddle with somebody; unless you are in prison.",
];
const badJokes = [
  "Why don’t oysters donate to charity? Because they’re shellfish",
  "What does a baby computer call its father? Data",
  "What did the custodian say when he jumped out of the closet? “Supplies!”",
  "Why are colds bad criminals? Because they’re easy to catch",
  "How does a penguin build its house? Igloos it together",
  "Which knight invented King Arthur’s Round Table? Sir Cumference",
  "What do sprinters eat before a race? Nothing. They fast",
  "What do you call a fly without wings? A walk!",
  "What happens when you witness a ship wreck? You let it sink in",
  "How can you find Will Smith in the snow? Follow the fresh prints.",
];

const logFunnyJoke = () => (pTag.textContent = getRandomJoke(funnyJokes));
const logBadJoke = () => (pTag.textContent = getRandomJoke(badJokes));

const jokeCreator = (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) => {
  if (shouldTellFunnyJoke) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
};

const joker = (isFunny) => () => jokeCreator(isFunny, logFunnyJoke, logBadJoke);

btnFunnyJoke.addEventListener("click", joker(true));
btnBadJoke.addEventListener("click", joker(false));
