import {drawField, stopGame, isFree, checkField, checkVictory, go, play, gameField, isXO, isCorrectPos} from './ticTacToe';


describe('ticTacToe', () => {
    it('has gameField empty cells', () => {
        expect(checkField(gameField)).toBe(true);
    });

    it('needed cell is free', () => {
        let cell = gameField[0][0]
        expect(isFree(cell)).toBe(true);
    });

    it('go to pos with symbol', () => {
        go([0, 0], 'x');
        expect(gameField[0][0]).toBe('x');
    });

    it('is correct symbol (x or o)', () => {
        expect(isXO('h')).toBeFalsy();
    });

    it('is correct position', () => {
        expect(isCorrectPos([3,0])).toBeFalsy();
    });

    it('drawing formated field', () => {
        expect(drawField(gameField)).toBe('x| | \n | | \n | | ');
    });

    it('checkVictory of x', () => {
        let x = 'x';
        go([0, 0], x);
        go([1, 1], x);
        go([2, 2], x);
        expect(checkVictory(gameField, x)).toBe(`${x} Победил!`);
    });

    it('stopGame should stop game', () => {
        stopGame();
        expect(play).toBe(false);
    });
})
