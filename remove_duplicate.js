let arr = [1, 2, 3, 12, 1, 23, 2, 23, 26];

function nonDuplicates (numbs){
    let uniqeArry = [];
    for(const number of numbs){
        if(uniqeArry.includes(number) === false){
            uniqeArry.push(number);
        }
    }
    return uniqeArry;
}

const uniqeArr = nonDuplicates(arr);
console.log(uniqeArr);