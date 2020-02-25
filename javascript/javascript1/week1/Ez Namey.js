const firstWords = ['Easy', 'Awesome', 'Magnificent', 'Impressive', 'Wonderful'];
const secondWords = ['Corporate', 'Life', 'Decision','Access', 'Meaning'];

/*for (let i = 0; i < worlds.length; i++) {
    const element = worlds[i];
    
}


function startupName(firstWords) {
    return firstWords[Math.floor(Math.random() * firstWords.length)];
}
startupName(firstWords);*/

let startupName = firstWords[Math.floor(Math.random() * firstWords.length)] + ' ' + secondWords[Math.floor(Math.random() * secondWords.length)];
console.log(startupName);