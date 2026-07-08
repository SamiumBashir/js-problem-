const price = [12000, 15000, 28000, 43000, 80000,76000];

function getMin (numbers){

    let minprice = numbers[0];

    for (const num of numbers){
        if(num < minprice){
            minprice = num;
        }
    }
    return minprice;
}

const cheapPrice = getMin(price);
console.log(cheapPrice);