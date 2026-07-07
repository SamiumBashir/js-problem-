// let text = 'Hello';

// function findsCons (alphabs){
//     let vowArry = ['a', 'e', 'i', 'o', 'u'];
//     let consArry = [];

//     for(let i = 0; i < alphabs.length; i++){
//         if(!vowArry.includes(alphabs[i])){
//             consArry.push(alphabs[i])
//         }
//     }
//     return {
//         count: consArry.length,
//         letter: consArry
//     };
// }

// const consLetter = findsCons(text);
// console.log(consLetter);


let text = 'Bangla';

function createReverse(word){
    let reverword = [];

    for(let i = 0; i < word.length ; i++){
        reverword.unshift(word[i]);
    }
    return reverword.join('');
}

const makeReverse = createReverse(text);
console.log(makeReverse);