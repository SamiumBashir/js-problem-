function celsiusToFer (celsius){
    const temp =(celsius * 9 / 5) + 32;
    return temp;
}

const feverInF = celsiusToFer(38);
// console.log(feverInF);

let numbers = [5,6,11,12,98, 5];

// function matchNumber(number){
//     let matchArry = [];
//     for(const numbs of number){
//         if(numbs === 5){
//             matchArry.push(numbs);
//         }
//     }
//     return matchArry;
// }

// const checkNumbs = matchNumber(numbers);
// console.log(checkNumbs.length);

function findNumbs(arryData){
    let missNumbs = [];
    for(const numbs of arryData){
        if(numbs === 25){
            missNumbs.push(numbs);
        }
    }
    return missNumbs;
}

const findNumber = findNumbs(numbers);
// console.log(findNumber.length)

const str = 'floccinaucinihilipilification';

function countVowel (vowels){
    let arrVow = [];
    const vowList = ['a', 'i', 'e', 'o', 'u']
    for(let i = 0; i <= vowels.length; i++){
        if(vowList.includes(vowels[i])){
            arrVow++;
        }
    }
    return arrVow;
}

const numbsOfVow = countVowel(str);
console.log(numbsOfVow);

let sentence = 'I am learning Programming to become a programmer';

function longWorld (word){
    const words = sentence.split(' ');
    let longWord = '';
    
    for(const word of words){
        if(word.length > longWord.length){
            longWord = word;
        }
    }
    return longWord;
}

const findLongest = longWorld(sentence);
// console.log(findLongest);