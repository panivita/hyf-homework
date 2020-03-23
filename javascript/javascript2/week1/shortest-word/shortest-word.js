function getShortestWord(words) {
    let shortestWord = words[0];
    for (let word of words) {
        if (word.length < shortestWord.length) {
            shortestWord = word;
        }
    }
    return shortestWord;
}

const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
const shortestWord = getShortestWord(danishWords);
console.log(shortestWord);
