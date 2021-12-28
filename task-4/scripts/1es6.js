"use strict";
/*
конструктор Product, который принимает параметры name и price, сохраните их как
свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount,
который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод make25PercentDiscount
не должен быть внутри функции-конструктора, и также не нужно создавать отдельный объект-прототип
* */

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price -= this.price * 0.25;
    }
}

let price = Math.round(Math.random() * 1000);
let product = new Product("T-short", price);
console.log(`Price ${price}`);
product.make25PercentDiscount();
console.log(product);