function getAverage(array) {
    const sum = array.reduce((sum, val) => (sum += val));
    const length = array.length;
    const average = sum / length;
    return average.toFixed(0);
}
function getMedian(array) {
    const arrSort = array.sort();
    const length = array.length;
    const middle = Math.ceil(length / 2);
    const median = length % 2 == 0 ? (arrSort[middle] + arrSort[middle - 1]) / 2 : arrSort[middle];
    return median;
}
function calculateMedAvg(array) {
    const median = getMedian(array);
    const average = getAverage(array);
    const calculator = [];
    calculator.push({ median, average });
    return calculator;
}
const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];
const resultCalculation = calculateMedAvg(housePrices);
console.log(resultCalculation);

const ulTag = document.getElementById('prices');
housePrices.forEach((price) => {
    const liTag = document.createElement('li');
    liTag.textContent = price;
    ulTag.appendChild(liTag);
});

const avgPrice = document.getElementById('average-price');
avgPrice.textContent = getAverage(housePrices);

const medianPrice = document.getElementById('median-price');
medianPrice.textContent = getMedian(housePrices);

const ul = document.getElementById('avg-median');
resultCalculation.forEach((result) => {
    const liTag = document.createElement('li');
    liTag.innerText = result.average;
    ul.appendChild(liTag);
    const li = document.createElement('li');
    li.innerText = result.median;
    ul.appendChild(li);
});