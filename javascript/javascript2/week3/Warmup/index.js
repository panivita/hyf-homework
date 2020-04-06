//1. Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded
const secondLog = function () {
    console.log('Called after 2.5 seconds');
}
setTimeout(secondLog, 2500);

//2. Create a function that takes 2 parameters: delay and stringToLog. 
//Calling this function should log out the stringToLog after delay seconds. 
//Call the function you have created with some different arguments.
const stringToLogFunc = (delay, stringToLog) => setTimeout(function () {
    console.log(stringToLog);
}, delay * 1000);
stringToLogFunc(5, 'This string logget after 5 seconds');
stringToLogFunc(3, 'This string logget after 3 seconds');

//3. Create a button in html. When clicking this button log out the text: 
//Called after 5 seconds 5 seconds after the button is clicked.
const btnElement = document.getElementById('button1');
btnElement.addEventListener('click', () => stringToLogFunc(5, 'called after 5 seconds'));

//4. Create two functions and assign them to two different variables. 
//One function logs out Earth, the other function logs out Saturn. 
//Now create a new third function that has one parameter: planetLogFunction. 
//The only thing the third function should do is call the provided parameter function. 
//Try call the third function once with the Earth function and once with the Saturn function.
const earthLogger = () => console.log('Earth');
const saturnLogger = () => console.log('Saturn');
const planetLogFunction = (planetLog) => planetLog();
planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

//5. Create a button with the text called "Log location". When this button is clicked the location 
//(latitude, longitude) of the user should be logged out using this browser api.
const status = document.querySelector('#status');
const latitude = document.querySelector('#latitude');
const longitude = document.querySelector('#longitude');
const findLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitudePosition = position.coords.latitude;
            const longitudePosition = position.coords.longitude;
            latitude.href = `https://www.openstreetmap.org/#map=18/${latitudePosition}/${longitudePosition}`;
            longitude.href = `https://www.openstreetmap.org/#map=18/${latitudePosition}/${longitudePosition}`;
            latitude.innerHTML = `<b>This is the latitude</b> ${latitudePosition} °`;
            longitude.innerHTML = `<b>This is the longitude</b> ${longitudePosition} °`;
        });
    }
    else {
        status.textContent = 'Unable to retrieve your location';
    }
}
const btnElement2 = document.getElementById('button2');
btnElement2.addEventListener('click', findLocation);