function celsiusToFer (celsius){
    const temp =(celsius * 9 / 5) + 32;
    return temp;
}

const feverInF = celsiusToFer(38);
console.log(feverInF);