const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function getSmallestName(names){
    let small = names[0];
    for(let name of names){
        if(name.length < small.length){
            small = name;
        }
    } return small;
}

const smallestName = getSmallestName(heights2);
console.log(smallestName);