const height = [65, 67, 70, 71, 80, 77];

function getMaxHeight (numbs){
    let heightestNum = numbs[0];
    for(const num of numbs){
        if(num > heightestNum){
            heightestNum = num;
        }
    }
    return heightestNum;
} 

const getTallest = getMaxHeight(height);
console.log(getTallest);