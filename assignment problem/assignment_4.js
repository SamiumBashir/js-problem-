function gonoVote(array) {
    if (!Array.isArray(array)) {
        return 'Invalid';
    };
    let haVote = 0;
    let naVote = 0;

    for (const vote of array) {
        if(vote === 'ha'){
            haVote = haVote + 1;
        } else{
            naVote = naVote + 1;
        }
    }
     if(haVote > naVote){
        return true;
     } else if(haVote < naVote){
        return false;
     } else{
        return 'equal';
     }

}


const result = gonoVote(["ha", "na", "ha", "na"]);
const result2 = gonoVote(["ha", "na", "na"]);
const result3 = gonoVote(["ha", "ha", "ha", "na"]);
const result4 = gonoVote("ha, na");
const result5 = gonoVote(12345)
console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);