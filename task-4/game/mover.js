"use strict";
let mover = {
    /**
     * Получает и отдает направление от пользователя
     * @returns {int|null} Возвращаемое направление, введенное пользователем
     * */
    getDirection() {
        const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            const direction = parseInt(prompt("Введите число 1, 2, 3, 4, 6, 7, 8 или 9, куда хотите переместиться или не число для выхода"));
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirections.includes(direction)) {
                alert("Введите 1, 2, 3, 4, 6, 7, 8 или 9");
                continue;
            }
            return direction;
        }
    },

    /**
     * Отдает следующую точку пользователя после движения
     * @param {int} direction Направление движения игрока
     * @returns {{x: int, y: int}} Слудующая позиция игрока
     */
    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };
        switch (direction) {
            case 1:
                if (nextPosition.y === config.rowsCount - 1 || nextPosition.x === 0) {
                    break;
                }
                nextPosition.x--;
                nextPosition.y++;
                break;
            case 2:
                if (nextPosition.y === config.rowsCount - 1) {
                    break;
                }
                nextPosition.y++;
                break;
            case 3:
                if (nextPosition.y === config.rowsCount - 1 || nextPosition.x === config.colsCount -1) {
                    break;
                }
                nextPosition.x++;
                nextPosition.y++;
                break;
            case 4:
                if (nextPosition.x === 0) {
                    break;
                }
                nextPosition.x--;
                break;
            case 6:
                if (nextPosition.x === config.colsCount - 1) {
                    break;
                }
                nextPosition.x++;
                break;
            case 7:
                if (nextPosition.x === 0 || nextPosition.y === 0) {
                    break;
                }
                nextPosition.x--;
                nextPosition.y--;
                break;
            case 8:
                if (nextPosition.y === 0) {
                    break;
                }
                nextPosition.y--;
                break;
            case 9:
                if (nextPosition.y === 0 || nextPosition.x === config.colsCount - 1) {
                    break;
                }
                nextPosition.x++;
                nextPosition.y--;
                break;
        }
        return nextPosition;
    }
};