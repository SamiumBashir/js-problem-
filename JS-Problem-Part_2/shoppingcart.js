const products = [
    {name: 'Shampoo', price: 400, quantity: 2},
    {name: 'shirt', price: 600, quantity: 1},
    {name: 'shop', price: 130, quantity: 6},
    {name: 'bangles', price: 200, quantity: 2},
    {name: 'pant', price: 900, quantity: 3},
]

function cartTotal(products){
    let total = 0;
    for(const product of products){
        // total = total + (product.price * product.quantity); can be done like or,
        let thisItemCost = product.price * product.quantity; // this 
            total = total + thisItemCost;

        if(total >= 5000){
            let discount = total * 0.10;
            total = total - discount;
        }
    };
    return total;
}

const getTotal = cartTotal(products);
console.log(getTotal);