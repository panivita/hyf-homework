function formatCreditCardNumber(creditCardNumber) {
    const currentNumber = creditCardNumber.toString();
    const cardNumberArray = [];
    for (var i = 0; i < currentNumber.length; i += 4) {
        const newNumber = currentNumber.slice(i, i + 4);
        cardNumberArray.push(newNumber);
    }
    const formattedCreditCard = cardNumberArray.join(' ');
    const creditCardObject = {
        original: creditCardNumber,
        formatted: formattedCreditCard,
    };
    return creditCardObject;
}

const formattedCreditCardObject = formatCreditCardNumber(564387654);
console.log(formattedCreditCardObject);



