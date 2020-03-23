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
const spiritAnimal = ['The crying butterfly', 'The fullmoon wolf', 'The fearless tiger', 'The forest rabit', 'The yelling monkey', 'The strong deer', 'The talking snake', 'The beautiful cow', 'The dancing bear', 'The happy duck'];

function onClickHandler() {
    let name = getName(inputTag);
    if (!name) {
        pTag.textContent = 'First enter your name';
    } else {
        let animal = getRandomName(spiritAnimal);
        pTag.textContent = `${name} - ${animal}`;
    }
}
btnTag.addEventListener('click', onClickHandler);

const textWritten = inputTag.addEventListener('keyup', onClickHandler);
const clickBtn = btnTag.addEventListener('click', onClickHandler);
function getSelect() {
    const selection = document.getElementById('select-option').value;
    if (selection === 'text-written') {
        return textWritten;
    }
    if (selection === 'hover-input') {
        return
    }
    else {
        return clickBtn;
    }
}