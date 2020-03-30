const numbers = [1, 2, 3, 4];

function doublesOddNumbers(numbers) {
    const currentNumbers = numbers.filter(num => num % 2 !== 0);
    return currentNumbers.map(num => num * 2);
}

const newNumbers = doublesOddNumbers(numbers);
console.log("The doubled numbers are", newNumbers); 