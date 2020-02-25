const firstWords = ['Easy', 'Awesome', 'Magnificent', 'Impressive', 'Wonderful'];
const secondWords = ['Corporate', 'Life', 'Decision','Access', 'Meaning'];


function random(words) {
    const i = Math.floor(Math.random() * words.length);
    return words[i];
}

function startupName() {
    const firstWord = random(firstWords);
    const secondWord = random(secondWords);
    return firstWord + ' ' + secondWord;
}

const name = startupName();
const length = name.length;
console.log('The startup: ' + name + ' contains ' + length +' characters');