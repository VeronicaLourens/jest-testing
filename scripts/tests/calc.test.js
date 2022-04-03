/**
 * @jest-environment jsdom
 */


const { test, expect } = require('@jest/globals');
const addition = require('../calc');

describe('calculator', () => {

    describe('Addition function', () => {

        test('Should return 42 for 20 + 22', () => {
            expect(addition(20, 22)).toBe(42);
        });

        test('Should return 73 for 42 + 31', () => {
            expect(addition(42, 31)).toBe(73);
        });

        // test("Should return 550 for 5 + '50' ", () => {
        //     expect(addition(5, '50')).toBe(550);
        // });



    });

    describe('Subtractoin function', () => {

    });

    describe('Multiplay function', () => {

    });

    describe('Division function', () => {

    });

})