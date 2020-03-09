// Function
function getCircleArea(radius) {
    return Math.PI * radius * radius;
}
const myRadius = 10;
const resultCircleArea = getCircleArea(myRadius);
console.log('The circle area is ' + resultCircleArea);

function celciusToFahreneit(celcius) {
    return celcius * 1.8 + 32;
}
const myTempInCelcius = 10;
const resultCelciusToFahreneit = celciusToFahreneit(myTempInCelcius);
console.log('The temperature in fahrenheit is  ' + resultCelciusToFahreneit +'°F');

// Scope
const global = 'global';
function scopeTest() {
    const functionScope = 'functionScope';
    console.log(functionScope);
    console.log(global);
    

    function tester() {
        console.log(global);
        const testerVariable = 'testerVariable';
        return testerVariable;
    }

    const testerResult = tester();
    console.log(testerResult);
}

scopeTest();

// For loop
// Simple for loop
for (let i = 74; i <= 98; i++) {
    console.log(i); 
}

// For loop in a function
function logString(stringToLog, numberOfTimesToLog) {
    let result = '';
    for (let i = 0; i < numberOfTimesToLog; i++) {
       result += stringToLog; 
      }
    return  result;
}
const resultLogString = logString('hello ', 3);
console.log(resultLogString);


