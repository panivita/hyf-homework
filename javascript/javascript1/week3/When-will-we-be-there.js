const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};
function timeToArrive(travelInformation) {
    const travelTime = travelInformation.destinationDistance / travelInformation.speed;
    return travelTime;
}
const resultTimeToArrive = timeToArrive(travelInformation);

function timeConvert(resultTimeToArrive) {
    const travelTimeInMinytes = Math.floor(resultTimeToArrive * 60);
    var hours = Math.floor(resultTimeToArrive);
    var minutes = travelTimeInMinytes % 60;
    return hours + " hours and " + minutes + ' minutes';
}
const convertTimeToArrive = timeConvert(resultTimeToArrive);
console.log(convertTimeToArrive);
