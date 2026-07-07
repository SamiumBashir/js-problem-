let sentence = 'programming is a fun ride';

function checkSmallestWord (text){
    let words = text.split(' ');
    let smallWord = words[0];

    for(const word of words){
        if(word.length < smallWord.length){
            smallWord = word;
        }
    }
    return smallWord;
}

const findSmallWord = checkSmallestWord(sentence);
console.log(findSmallWord);