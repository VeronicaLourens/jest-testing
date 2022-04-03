const { test, expect } = require('@jest/globals');
const addition = require('../calc');

describe('calculator', () => {
    describe('Addition function', () => {
        test('Should return 42 for 20 + 22', () => {
            expect(addition(20, 22)).toBe(42);
        })

    });

    describe('Subtractoin function', () => {

    });

    describe('Multiplay function', () => {

    });

    describe('Division function', () => {

    });

})