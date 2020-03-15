function getSentimentScore(surrentString) {
    let result = {
        score: 0,
        positiveWords: [],
        negativeWords: [],
    }
    const myString = string.split(' ');
    return;
}
const arrayPositiveWords = ['super', 'awesome', 'happy'];
const arrayNegativeWords = [];
const sentimentScoreObject = getSentimentScore('I am mega super awesome happy');

console.log(sentimentScoreObject);
/*
{
  score: 3,
  positiveWords: ['happy', 'awesome', 'super'],
  negativeWords: [],
}
*/
function printNumber(number) {
    if ((number % 3 === 0) && (num % 5 === 0)) {
        return "FizzBuzz";
    }
    else if (number % 3 === 0) {
        return "Fizz";
    } else if (number % 5 === 0) {
        return "Buzz";

    } else {
        return number;
    }
}
const resultPrint = printNumber(5);
console.log(resultPrint);

function fizzBuzzNumber(number, fizzNumber, buzzNumber) {

    if ((number % fizzNumber === 0) && (number % buzzNumber === 0)) {
        return "FizzBuzz";
    }
    if (number % fizzNumber === 0) {
        return "Fizz";
    }
    if (number % buzzNumber === 0) {
        return "Buzz";

    }
    return number;
}

let resultArray = [];
for (let i=1; i <= 100; i++) {
const result = fizzBuzzNumber(i, 3, 5);
resultArray.push(result);
}

function formatCreditCardNumber(creditCardNumber) {
    
}
const formattedCreditCardObject = formatCreditCardNumber(123456789);
console.log(formattedCreditCardObject);
/*
{
  original: 123456789,
  formatted: "1234 5678 9",
}
*/