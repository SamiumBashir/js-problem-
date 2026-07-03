// convert inch to feet

function InchToFeet (inch){
    const feet = inch /12;
    return feet
}

const omukHeight = InchToFeet(75);
// console.log(omukHeight);

// conversition 2 

function InchToFeet2 (inch){
    const feetNumber = parseInt(inch / 12);
    const inchNumber = inch % 12;
    const result = feetNumber + ' ft ' + inchNumber + ' inch.';
    return result;
}

const finalHeight = InchToFeet2(75);
// console.log(finalHeight);

// convert 3

function milesToKilo (miles){
    const kilo = miles * 1.60934;
    return kilo;
}

const finalkilo = milesToKilo(6);
// console.log(finalkilo);


// convert 4

function kiloToMiles (kilo){
    const miles = kilo * 0.621371
    return miles;
}

const finalMiles = kiloToMiles(7);
// console.log(finalMiles)

function daysToYear (days){
    const yearFranction = days / 365;
    const yearNumber = parseInt(yearFranction);
    let daysNumber = days % 365;
    let monthNumber = 0;
        if(daysNumber >= 30){
            monthNumber = parseInt(daysNumber / 30);
            daysNumber = daysNumber % 30;
        } else {
            monthNumber = 0;
        }
    return finalAge = yearNumber + ' years ' + monthNumber + ' months ' + daysNumber +' days ';
}


let customerAge = daysToYear(890);
console.log(customerAge);
