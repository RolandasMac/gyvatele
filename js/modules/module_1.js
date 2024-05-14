// console.log('module veikia!')

export const matrix = document.querySelector('#matrix');
export let snake = [
    30,
    29,
    28,
    27
]
export const right = 1;
export const left = -1;
export const up = -20;
export const down = 20;
export let inteval = null;
export let mealInteval = null;
export let direction = right;



///   Functions   ///

export function createMatrix() {
    for (let i = 0; i < 400; i++) {
        const box = document.createElement('div');
        box.id = i;
        // box.textContent = i;
        matrix.appendChild(box);
    }
}

export function createSnake(matrix,arr){
    arr.forEach((x)=>{
        matrix.children[x].style.backgroundColor="green"
    })
}

export function action(matrix, move){
    inteval = setInterval(()=>{
        moveTo1(direction);
        createSnake(matrix,snake)
        //*** Šitas reikalingas sudėtingai funkcijai*** //
        // if(!moveTo(direction)){
        //     createSnake(matrix,snake)
        // }
    },500)
}

// Labai sudėtingai parašyta funkcija
export function moveTo(direction){
    let previousSnakeEl = snake[0];
    let meal = false;
    let stop = null;
    for (let i = 0; i < snake.length; i++) {
        if(i===0){
            snake[i] = snake[i] + Number(direction);
                if(snake.slice(1).includes(snake[i])||(snake[0]%20===0&&direction===1)||((snake[0]+1)%20===0&&direction===-1)||(snake[0]<0)||(snake[0]>399)){
                    alert('game over');
                    clearInterval(mealInteval);
                    clearInterval(1);
                    stop = true;
                }else if(matrix.children[snake[i]].style.backgroundColor==='red'){
                    meal = true;
                }
        }else{
            let nextSnakeEl = snake[i];
            snake[i] = previousSnakeEl;
            previousSnakeEl = nextSnakeEl;
        }
    if(i===snake.length-1 && meal) {
        snake.push(previousSnakeEl)
        // console.log(previousSnakeEl);
        break;
    }else if(i===snake.length-1 && !meal && !stop){
        matrix.children[previousSnakeEl].style.backgroundColor="white";
    }
    }
    return stop;
}

// Paprasčiau parašyta funkcija
export function moveTo1(direction){
    let oldSnake = [...snake];
    snake.unshift(snake[0]+direction);
    if(snake.slice(1).includes(snake[0])||(snake[0]%20===0&&direction===1)||((snake[0]+1)%20===0&&direction===-1)||(snake[0]<0)||(snake[0]>399)){
        alert('game over');
        clearInterval(mealInteval);
        clearInterval(1);
        snake = [...oldSnake]
    }else if(matrix.children[snake[0]].style.backgroundColor==="red") {

    }else{
        matrix.children[snake[snake.length-1]].style.backgroundColor="white";
        snake.pop()
    }
}

export function createMeal(){
    mealInteval = setInterval(()=>{
        let randomBox = Math.floor(Math.random() * 400);
        matrix.children[randomBox].style.backgroundColor = 'red';
    },10000)

}

export function keyDown(event) {
    const key = event.key;
    switch (key) {
        case "ArrowLeft":
            direction = left;
            break;
        case "ArrowRight":
            direction = right;
            break;
        case "ArrowUp":
            direction = up;
            break;
        case "ArrowDown":
            direction = down;
            break;
    }
}






