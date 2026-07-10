let sentence = 'i am loving javascript';

function changeUpCase(text) {
    let words = sentence.split(' ');
    let modifiedText = [];

    for (const word of words) {
        let capitalizedWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
        modifiedText.push(capitalizedWord);
    }
    let finalSentence = modifiedText.join(' ');
    return finalSentence;
}

const finalText = changeUpCase(sentence);
console.log(finalText);