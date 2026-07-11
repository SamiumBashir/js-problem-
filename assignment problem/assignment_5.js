function analyzeText(str) {
    if(typeof str !== 'string' || str.trim() === ''){
        return 'Invalid';
    }
    let words = str.split(' ')
    let longestWord = str[0];
    let token = words.join('');
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return {
        longWorld: longestWord,
        token: token.length
    };

}

const result = analyzeText("  ");
console.log(result);
