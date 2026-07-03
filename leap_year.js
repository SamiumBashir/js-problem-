// leapyear calc

function isLeapYear (year){
    if(year % 4 === 0){
        return true;
    } else{
        return false;
    }
}

const checkLeapY = isLeapYear(3403);
// console.log(checkLeapY);

// Leap Year check //

function isLeap (year){
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        return true;
    } else {
        return false;
    }
}

const checkleap = isLeap(1952);
console.log(checkleap);