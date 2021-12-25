"use strict";
/*
Нарисовать горку с помощью console.log (используя цикл for);
у вашей горки должно быть 20 рядов
* */
const count = 20;
let symbol = "x";
for (let i = 0; i < count; i++) {
    console.log(symbol);
    symbol += "x";
}