import { 
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
    isCorrectOrder
} from './ticTacToe';

describe('ticTacToe', () => {

    it('generateGameField should return array 3x3', () => {
        
    });
    it('has gameField empty cells', () => {
        let gameField = generateGameField();
        expect(checkField(gameField)).toBe(true);
    });

    it('needed cell is free', () => {
        let gameField = generateGameField(); 
        expect(isFree(gameField[0][0])).toBe(true);
    });

    it('move to pos with symbol', () => {
        let gameField = generateGameField();
        let state = createGameState();
        move([0, 0], 'x', gameField, state);
        expect(gameField[0][0]).toBe('x');
    });

    it('is correct symbol (x or o)', () => {
        expect(isXO('h')).toBeFalsy();
    });

    it('is correct position', () => {
        expect(isCorrectPos([3,0])).toBeFalsy();
    });

    it('drawing formated field x = pos[0, 0]; o = pos[1, 1]', () => {
        let gameField = generateGameField();
        let state = createGameState();
        move([0, 0], 'x', gameField, state);
        move([1, 1], 'o', gameField, state);
        expect(drawField(gameField)).toBe('x| | \n |o| \n | | ');
    });

    it('drawing formated field', () => {
        let gameField = generateGameField()
        expect(drawField(gameField)).toBe(' | | \n | | \n | | ');
    });

    it('checkVictory of x', () => {
        let gameField = generateGameField();
        let state = createGameState();
        let x = 'x';
        move([0, 0], x, gameField, state);
        move([0, 1], 'o', gameField, state);
        move([1, 1], x, gameField, state);
        move([1, 0], 'o', gameField, state);
        move([2, 2], x, gameField, state);
        expect(checkVictory(gameField, x, state)).toBe(`${x} Победил!`);
    });

    it('getGameStatus should return boolean (true - game is on) (false - game is turned off)', () => {
        let state = createGameState()
        expect(getGameStatus(state)).toBeTruthy();
    });

    it('toggleGame should toggle game\'s state', () => {
        let gameState = createGameState();
        toggleGame(gameState);
        expect(getGameStatus(gameState)).toBe(false);
    });

    it('changeTurn should change gameState.turn "x" to "o" or "o" to "x"', () => {
        let state = createGameState();
        changeTurn('x', state)
        expect(isCorrectOrder('o', state)).toBeTruthy()
    });

    it('changeTurn should change gameState.turn "o" to "x"', () => {
        let state = createGameState();
        changeTurn('o', state)
        expect(isCorrectOrder('x', state)).toBeTruthy()
    });
})
