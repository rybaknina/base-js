"use strict";
/**
 * Объект игрока
 * @property {int} x Позиция по координате X
 * @property {int} y Позиция по координате Y
 * @type {{move(*): void, x: number, y: number}}
 */
const player = {
    x: 0,
    y: 0,
    /**
     * Двигает игрока по переданному направлению
     * @param  {{x: int, y: int}} nextPoint Следующая точка пользователя
     */
    move(nextPoint) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    }
};