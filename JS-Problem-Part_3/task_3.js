
function calculateElectronicsBudget (laptopQuantity, tabQuantity, mobileQuantity){
    const laptopPrice = 35000
    const tabletPrice = 15000
    const mobilePrice = 20000 

    const totalLapsPrice = laptopPrice * laptopQuantity;
    const totalTapsPrice = tabletPrice * tabQuantity;
    const totalmobilePrice = mobilePrice * mobileQuantity;

    let totalAmount = totalLapsPrice + totalTapsPrice + totalmobilePrice;
    return totalAmount;
}

const cartListPrice = calculateElectronicsBudget(2,3,5);
console.log(cartListPrice);