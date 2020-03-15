function formatCreditCardNumber(creditCardNumber) {
    const number = creditCardNumber.toString();
    const currentNumber = number.split('');
    //const newCreditCard = currentNumber.slice(0,4) + currentNumber.slice(4,8);
    //const currentNumberCard = newCreditCard.split(',');
    return currentNumber;

}
const formattedCreditCardObject = formatCreditCardNumber(123456789);
console.log(formattedCreditCardObject);
/*
{
  original: 123456789,
  formatted: "1234 5678 9",
}
*/

function dash(word) {
    const dash = [];
    for (var i = 0; i < word.length; i++) {
        if (i === 0) {
            dash.push(word[i]);
        } else if (i % 4 === 0) {
            dash.push("&nbsp;");
        }
        else {
            dash.push(word[i]);
        }
    }
    return dash;
}


const dashedMultiple = dash('123456789');
console.log(dashedMultiple);
