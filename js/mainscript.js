import {
    matrix,
    createMatrix,
    snake,
    createSnake,
    action,
    moveTo,
    createMeal,
    direction,
    keyDown
} from './modules/module_1.js'

// Action
createMatrix();

createSnake(matrix,snake);

action(matrix, moveTo, direction);

createMeal();

document.body.addEventListener('keydown', keyDown);