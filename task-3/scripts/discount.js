"use strict";

/*
3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый
товар применить скидку 15%
* */
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

function discount(product) {
    product.price -= (product.price * 0.15);
}

products.forEach(product => {
    discount(product);
});

console.log(products);