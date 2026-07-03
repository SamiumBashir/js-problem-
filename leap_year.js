// leapyear calc

function isLeapYear (year){
    if(year % 4 === 0){
        return true;
    } else{
        return false;
    }
}

const checkLeapY = isLeapYear(3403);
console.log(checkLeapY);