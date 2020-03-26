function getShortestWord(words) {
    if (words.length !== 0) {
        let shortestWord = words[0];
        for (let i = 1; i < words.length; i++) {
            if (words[i].length < shortestWord.length) {
                shortestWord = words[i];
            }
        }
        return shortestWord;
    } else {
        return 'Error message'
    }
}

const danishWords = ['ø', 'bil', 'plante', 'kaffe', 'bog', 'planetarium'];
const shortestWord = getShortestWord(danishWords);
console.log(shortestWord);
