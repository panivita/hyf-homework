const numbers = [1, 2, 3, 4];

const doublesOddNumbers = (numbers) => numbers.filter(num => num % 2 !== 0).map(num => num * 2);

const newNumbers = doublesOddNumbers(numbers);
console.log("The doubled numbers are", newNumbers); 