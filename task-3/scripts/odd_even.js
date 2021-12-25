"use strict";
/*
1. С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль,
с помощью console.log) от 0 до 10 включительно
* */
const count = 10;
for (let i = 0; i < count; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
        continue;
    }
    if (i % 2 === 0) {
        console.log(`${i} - четное число`);
    } else {
        console.log(`${i} - нечетное число`);
    }
}