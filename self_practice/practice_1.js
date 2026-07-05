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
console.log(findNumber.length)