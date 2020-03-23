const inputTag = document.getElementById('input');
const btnTag = document.getElementById('get-spiritual-name');
const pTag = document.getElementById('spiritual-name');


function addSpiritAnimalString(spiritAnimal) {
    const random = Math.floor(Math.random() * 10);
    return spiritAnimal[random];
}
const spiritAnimal = ['The crying butterfly', 'The fullmoon wolf', 'The fearless tiger', 'The forest rabit', 'The yelling monkey', 'The strong deer', 'The talking snake', 'The beautiful cow', 'The dancing bear', 'The happy duck'];

const str = addSpiritAnimalString(spiritAnimal);

/*btnTag.addEventListener('click', function () {
    const text = document.getElementById('text');
    text.value += ' after clicking';
});*/

btnTag.addEventListener('click', function () {
    getRandomName(inputTag.value);
});

function getRandomName(value) {
    if (!value.replace(/^\s+|\s+$/g, '')) {
        pTag.textContent = 'First enter your name';
        return pTag.textContent;
    } else {
        pTag.textContent = `${value} - ${str}`;
        return pTag.textContent;
    }
}