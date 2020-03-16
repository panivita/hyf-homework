function getCharacterFrequencies(word) {
    const letters = word.split('');
    const result = {};
    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        if (result[letter] === undefined) {
            result[letter] = 1;
        }
        else {
            result[letter]++;
        }
    }
    return result;
}
const frequencies = getCharacterFrequencies('happy');

function formattedCharacterFrequencies(frequencies) {
    const result = [];
    let sum = 0;
    for (const property in frequencies) {
        sum += frequencies[property];
        result.push({
            character: property,
            count: frequencies[property],
        });
    }
    
    const resultObject = {
        characters: result,
        length: sum,
    };
    return resultObject;
}

const resultFormattedCharacterFrequencies = formattedCharacterFrequencies(frequencies);
console.log(resultFormattedCharacterFrequencies);
/*
{
  characters: [
    {
      character: 'a',
      count: 1
    },
    {
      character: 'h',
      count: 1
    },
    {
      character: 'p',
      count: 2
    },
    {
      character: 'y',
      count: 1
    }
  ], length: 5
}
*/