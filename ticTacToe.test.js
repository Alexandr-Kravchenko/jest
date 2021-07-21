import {drawField, stopGame, isFree, checkField, checkVictory, go, play} from './ticTacToe';

let gameField = [
    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' ']
]

// let gameField = [
//     ['x','x','x'],
//     ['x','x','x'],
//     ['x','x','x']
// ]

describe('ticTacToe', () => {
    it('stopGame should stop game', () => {
        stopGame();
        expect(play).toBe(false);
    });
    it('has gameField empty cells', () => {
        expect(checkField(gameField)).toBe(true);
    });
    it('needed cell is free', () => {
        let cell = gameField[0][0]
        expect(isFree(gameField)).toBe(true);
    });

})