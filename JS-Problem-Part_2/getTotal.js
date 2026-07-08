function getTotal (shirtQuantity, pantQuantity, shoeQuantity){
    const shirtprice = 500;
    const pantPrice = 300;
    const shoePrice = 900;

    const totalShirPrice = shirtQuantity * shirtprice;
    const totalPantPrice = pantQuantity * pantPrice;
    const totalShoePrice = shoeQuantity * shirtprice;

    const totalPrice = totalShirPrice + totalPantPrice + totalShoePrice;

    return totalPrice;
}

const totalCost = getTotal(4, 2, 5);
console.log(totalCost);