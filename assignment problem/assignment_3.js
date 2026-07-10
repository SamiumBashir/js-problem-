function finalScore(omr) {
    if (typeof omr.right !== 'number' || typeof omr.wrong !== 'number' || typeof omr.skip !== 'number'){
        return 'Invalid';
    }
    if((omr.right + omr.wrong + omr.skip) !== 100){
        return 'Invalid';
    }
    let totalMarks = (omr.right * 1) + (omr.wrong * (-0.5)) + (omr.skip * 0);
    return Math.round(totalMarks);
}

const result = finalScore({ right: 30, wrong: 30, skip: 40 });
console.log(result);