"use strict";
let game = {
    // запускает игру
    run() {
        while (true) {
            // Получаем направление от игрока
            let direction = mover.getDirection();
            if (direction === null) {
                console.log("Game over");
                return;
            }
            const nextPoint = mover.getNextPosition(direction);
            renderer.clear();
            player.move(nextPoint);
            renderer.render();
        }
    },

    // выполняется при открытии страницы
    init() {
        console.log("Ваше положение на поле в виде \"o\"");
        renderer.render();
        console.log("Для начала игры наберите game.run() и нажмите Enter");
    }
};

game.init();