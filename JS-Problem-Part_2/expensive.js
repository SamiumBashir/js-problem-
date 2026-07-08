const phones = [
    {name : 'Samsung', price: 40000, camera: '12 mega pixel', color: 'Black'},
    {name : 'Apple', price: 140000, camera: '12 mega pixel', color: 'Black'},
    {name : 'Xiaomi', price: 45000, camera: '12 mega pixel', color: 'Black'},
    {name : 'Oppo', price: 49800, camera: '12 mega pixel', color: 'Black'},
    {name : 'Vivo', price: 32000, camera: '12 mega pixel', color: 'Black'},
    {name : 'Sony', price: 54000, camera: '12 mega pixel', color: 'Black'}
]

function getExpensive (phones){

    let expensive = phones[0];

    for(const phone of phones){
        if (phone.price > expensive.price){
            expensive = phone;
        }
    }
    return expensive;
}

const expensiveOne = getExpensive(phones);
console.log(expensiveOne);