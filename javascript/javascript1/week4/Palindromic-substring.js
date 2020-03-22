function isPalindrome(string) {
    const revString = string.split('').reverse().join('');
    return string == revString;
}

function longestPalindrome(string) {
    let maxPalindLength = 0,
        maxPalind = ' ';
    for (let i = 0; i < string.length; i++) {
        const subString = string.substr(i, string.length);
        if (subString.length <= maxPalindLength)
            break;
        for (let j = subString.length; j >= 0; j--) {
            const subSubString = subString.substr(0, j);
            if (subSubString.length <= maxPalindLength)
                break;
            if (isPalindrome(subSubString)) {
                maxPalindLength = subSubString.length;
                maxPalind = subSubString;
            }
        }
    }
    return maxPalind;
}
const result = longestPalindrome('abracadabra');
console.log(result);

