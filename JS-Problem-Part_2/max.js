const jim = 56;
const kim = 87;
const tim = 95;

function getMax (numbs1, numbs2, numbs3){
    if(numbs1 > numbs2 && numbs1> numbs3){
        return numbs1;
    } else if(numbs2 > numbs1 && numbs2 > numbs3){
        return numbs3;
    } else{
        return numbs3;
    }
}

const maxNumber = getMax(jim, kim, tim);
// console.log('Highest Number is',maxNumber);

const maxNumber2 = Math.max(jim, kim, tim);
console.log(maxNumber2)