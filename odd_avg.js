let arr = [12, 11, 48, 27, 55, 47, 23, 26, 39];

function oddAvg (avgOfOdd){
    const newArry = [];
    for(const number of arr){
        if(number % 2 === 1){
            newArry.push(number);
        };
    };

    let sum = 0;

    for(const number of newArry){
        sum = sum + number;
    };
    
    let finalSum = sum / newArry.length; // we are using .length instead of [i] cause , newArry is an Array.
    return finalSum;
}

const oddAvrg = oddAvg(arr);
console.log(oddAvrg);