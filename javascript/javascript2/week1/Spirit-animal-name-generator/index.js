function getName(tag) {
    return tag.value.replace(/^\s+|\s+$/g, '')
}

function getRandomName(phrases) {
    const random = Math.floor(Math.random() * phrases.length);
    return phrases[random];
}

const inputTag = document.getElementById('input');
const btnTag = document.getElementById('get-spiritual-name');
const pTag = document.getElementById('spiritual-name');
const selectOption = document.getElementById('select-option');

const spiritAnimal = ['The crying butterfly', 'The fullmoon wolf', 'The fearless tiger', 'The forest rabit', 'The yelling monkey', 'The strong deer', 'The talking snake', 'The beautiful cow', 'The dancing bear', 'The happy duck'];
function onClickHandler() {
    if (selectOption.value !== 'click-btn')
        return;

    let name = getName(inputTag);
    if (!name) {
        pTag.textContent = 'First enter your name';
    } else {
        let animal = getRandomName(spiritAnimal);
        pTag.textContent = `${name} - ${animal}`;
    }
}
btnTag.addEventListener('click', onClickHandler);

function onSelectOptionKeyUp() {
    if (selectOption.value !== 'text-written') {
        return;
    }
    if (event.keyCode === 13) {
        let name = getName(inputTag);
        if (!name) {
            pTag.textContent = 'First enter your name';
        } else {
            let animal = getRandomName(spiritAnimal);
            pTag.textContent = `${name} - ${animal}`;
        }
    }
}

inputTag.addEventListener('keyup', onSelectOptionKeyUp);

function onMouseover() {
    if (selectOption.value !== 'hover-input')
        return;
    let name = getName(inputTag);
    let animal = getRandomName(spiritAnimal);
    pTag.textContent = `${name} - ${animal}`;
}
inputTag.addEventListener('mouseover', onMouseover);
