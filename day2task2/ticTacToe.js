
function generateGameField() {
    return [
        [' ',' ',' '],
        [' ',' ',' '],
        [' ',' ',' ']
    ]
}

function createGameState() {
    return {
        play: true,
        turn: 'x'
    }
}

function getGameStatus(state) {
    return state.play;
}

function drawField(field) {
    let result = [];
    for(let i = 0; i < field.length; i += 1) {
        result.push(field[i].join('|'))
    }
    return result.join('\n');
}

function isXO(symbol) {
    return symbol === 'x' || symbol === 'o';
}

function isCorrectPos(pos) {
    return pos[0] >= 0 && pos[0] <= 2 && pos[1] >= 0 && pos[1] <= 2;
}

function isCorrectOrder(symbol, gameState) {
    return gameState.turn === symbol;
}

function changeTurn(symbol, gameState) {
    return gameState.turn = symbol === 'x' ? 'o' : 'x';
}

function move(pos, symbol, field, state) {
    if(getGameStatus(state)) {
        if(isXO(symbol) && isCorrectPos(pos)) {
            if(!checkField(field)) {
                toggleGame(state);
            } else {
                if(isFree(field[pos[0]][[pos[1]]])) {
                    if(isCorrectOrder(symbol, state)) {
                        field[pos[0]][[pos[1]]] = symbol;
                        changeTurn(symbol, state);
                    } else {
                        console.log('Не твой ход');
                    }
                } else {
                    console.log('Клетка занята');
                }
                console.log(drawField(field));
                return console.log(checkVictory(field, symbol, state));
            }
        } else {
            console.log(drawField(field));
            return 'Или не тем ходишь, или далеко хочешь';
        }
    } else {
        return console.log('Игра остановлена. Ход невозможен');
    }
}

function checkVictory(field, symbol, state) {
    if(field[0][0] === symbol && field[0][1] === symbol && field[0][2] === symbol){
        toggleGame(state);
        return `${symbol} Победил!` 
    }
    if(field[1][0] === symbol && field[1][1] === symbol && field[1][2] === symbol){
        toggleGame(state);
        return `${symbol} Победил!`
    }
    if(field[2][0] === symbol && field[2][1] === symbol && field[2][2] === symbol){
        toggleGame(state);
        return `${symbol} Победил!`
    }

    if(field[0][0] === symbol && field[1][0] === symbol && field[2][0] === symbol){
        toggleGame(state);
        return `${symbol} Победил!`
    }
    if(field[0][1] === symbol && field[1][1] === symbol && field[2][1] === symbol){
        toggleGame(state);
        return `${symbol} Победил!`
    }
    if(field[0][2] === symbol && field[1][2] === symbol && field[2][2] === symbol){
        toggleGame(state);
        return `${symbol} Победил!`
    }

    if(field[0][0] === symbol && field[1][1] === symbol && field[2][2] === symbol){
        toggleGame(state);
        return `${symbol} Победил!`
    }
    if(field[0][2] === symbol && field[1][1] === symbol && field[2][0] === symbol){
        toggleGame(state);
        return `${symbol} Победил!`
    }
    if(!checkField(field)) {
        toggleGame(state);
        return 'Ничья'
    }
    return `Ходи!`
}

function checkField(field) {
    let result = [];
    for(let i = 0; i < field.length; i += 1) {
        result.push(field[i].some(isFree));
    }
    return result.some((bool) => bool === true);
}

function isFree(pos) {
    return pos === " ";
}

function toggleGame(state) {
    return state.play = !state.play;
}

function move(pos, symbol) {
    return move(pos, symbol, gameField, gameState);
}

const gameField = generateGameField();

const gameState = createGameState();

/* function main (){
    move([0,1],'x', gameField, gameState);
    move([0,0],'o', gameField, gameState);
    move([1,0],'o', gameField, gameState);
    move([2,0],'x', gameField, gameState);

    move([0,1],'o', gameField, gameState);
    move([1,1],'x', gameField, gameState);
    move([2,1],'o', gameField, gameState);

    move([0,2],'x', gameField, gameState);
    move([1,2],'o', gameField, gameState);
    move([1,1],'x', gameField, gameState);
    move([1,0],'o', gameField, gameState);
    move([1,0],'o', gameField, gameState);
    move([1,0],'o', gameField, gameState);
} */

// main();

export { 
        getGameStatus,
        createGameState,
        generateGameField,
        drawField,
        checkField,
        checkVictory,
        move,
        changeTurn,
        toggleGame,
        isFree,
        isXO, 
        isCorrectPos,
        isCorrectOrder,
    };