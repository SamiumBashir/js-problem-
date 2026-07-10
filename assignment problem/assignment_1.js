
function newPrice (currentPrice , discount){
    if(typeof currentPrice !== 'number' || typeof discount !== 'number'){
        return 'Invalid';
    }
    let discountAmount = (currentPrice * discount)/100;
    let payAmount = (currentPrice - discountAmount);
    return payAmount.toFixed(3);
}

const finalPrice = newPrice(1500, 20);
const finalPrice2 = newPrice(2000, 15);
const finalPrice3 = newPrice(1200, 7);
const finalPrice4 = newPrice ("1000", 10);
const finalPrice5 = newPrice(2000, 17.17);
const finalPrice6 = newPrice(500, "5");
console.log(finalPrice, finalPrice2, finalPrice3, finalPrice4, finalPrice5, finalPrice6);