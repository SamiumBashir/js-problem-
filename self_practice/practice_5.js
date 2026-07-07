// let sentence = 'I am learning web development';

// function findLastWord (text){
//     let words = text.split(' ');
//     let lastWord = ' ';
    
//     for(const word of words){
//         lastWord = word;
//     }
//     return lastWord;
// }

// const checklastWord = findLastWord(sentence);
// console.log(checklastWord);


// let sentence = 'this is a bad movie';

// function createBeepWord (text){
//     let words = text.split(' ');
//     let newStr = [];
//     for(const word of words){
//         if(word === 'bad'){
//             newStr.push('****');
//         } else{
//             newStr.push(word);
//         }
//     }
//     return newStr.join(' ');
// }


// const beepCmmnt = createBeepWord (sentence);
// console.log(beepCmmnt);

// let array = ['Java', 'is', 'not', 'JavaScript'];

// function joinArray (text){
//     newArray = ' ';
//     return newArray = array.join(' ');
// }

// const newline = joinArray(array);
// console.log(newline);

let text = 'amake amar moto thakte dao';

function findMatch (word){
    let matchedArray = ' ';
    let letter = 'a';

    for(let i = 0; i < word.length; i++){
        if(word[i] === letter){
            matchedArray++
        };
    };
    return matchedArray;
}

const matchedLetterCount = findMatch(text);
console.log(matchedLetterCount);