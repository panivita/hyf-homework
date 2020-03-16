function getCardInfo(number) {
    const cardsTypes = {
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^5[1-5][0-9]{14}$/,
        electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
        maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
        dankort: /^(5019)\d+$/,
        amex: /^3[47][0-9]{13}$/,
    };
    for (var property in cardsTypes) {
        if (cardsTypes[property].test(number)) {
            return property;
        }
    }
}

const resultGetCardInfo = getCardInfo(4781321334789876);
console.log(resultGetCardInfo); 

function getCardType(cardNumber) {
    const cardsTypes = {
        entertainmentCards: 3,
        visa: 4,
        masterCard: 5,
        discoverCard: 6,
    };
    const currentNumber = cardNumber.toString();
    const cardNumberArray = currentNumber.split('');;
    const firstNumber = cardNumberArray[0];
    for (var property in cardsTypes) {
        if (firstNumber == cardsTypes[property]) {
            return property;
        }
    }
}
const resultGetCardType = getCardType(4781321334789876);
console.log(resultGetCardType);
