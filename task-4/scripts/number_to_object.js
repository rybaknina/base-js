"use strict";
/*
Написать функцию, преобразующую число в объект.
 должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundreds)
* */
class ObjectFromNumber {
    constructor(units, tens, hundreds) {
        this.units = units;
        this.tens = tens;
        this.hundreds = hundreds;
    }
}

/**
 * Функция, преобразующая число в объект
 * @param value число, которое нужно преобразовать
 * @returns {ObjectFromNumber} объект, в котором указаны единицы, десятки и сотни числа
 */
function numberToObject(value) {
    if (!Number.isInteger(value)) {
        console.log("Value not an integer");
        return new ObjectFromNumber();
    }
    if (value < 0 || value > 999) {
        console.log("Value not in 0..999");
        return new ObjectFromNumber();
    }
    let hundreds = Math.floor(value / 100);
    let tens = Math.floor(value % 100 / 10);
    let units = value % 10;
    return new ObjectFromNumber(units, tens, hundreds);
}

let value = Number(prompt("Enter a whole number in 0-999"));
let objectFromNumber = numberToObject(value);
console.log(objectFromNumber);