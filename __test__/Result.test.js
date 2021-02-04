const { Result } = require('../build/Result.js');

describe('the Left class', () => {
    it('can create instances', () => {
        const instance = Result.left(new Error());

        expect(instance).not.toBe(null);
    });

    it('correctly judges left from right', () => {
        const leftInstance = Result.left(new Error('test error'));
        const rightInstance = Result.right(42);
        expect(Result.ok(leftInstance)).toBe(false);
        expect(Result.ok(rightInstance)).toBe(true);
    });
});
