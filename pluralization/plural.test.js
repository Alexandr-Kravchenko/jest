function pl(n, word) {
    return `${n} ${word}${n > 1 ? 's' : ''}`;
}
describe('pluralization', () => {
    it('has no effect with 1', () => {
        expect(pl(1, 'cat')).toBe('1 cat')
    })

    it('add "s" for 2 and more', () => {
        expect(pl(2, 'cat')).toBe('2 cats');
    })
})