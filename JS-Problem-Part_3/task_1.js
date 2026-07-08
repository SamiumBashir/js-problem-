const heights2 = [167, 190, 120, 165, 137];

function getLowest(numbers) {

    let lowest = numbers[0];

    for (const num of numbers) {
        if (num < lowest) {
            lowest = num;
        }
    } return lowest;

}

const lowestNumb = getLowest(heights2);
console.log(lowestNumb);