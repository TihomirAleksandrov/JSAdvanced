const { expect, assert } = require('chai');
const { createCalculator } = require('./AddSubtract');

describe('Construction check', () => {
    it('Should initialise an object', () => {
        assert.isObject(createCalculator());
    })
    it('Should contain add method', () => {
        expect(createCalculator()).to.have.property('add');
    })
    it('Should contain subtract method', () => {
        expect(createCalculator()).to.have.property('subtract');
    })
    it('Should contain get method', () => {
        expect(createCalculator()).to.have.property('get');
    })
})

describe('Add method check', () => {
    it('Should return correct value', () => {
        let calculator = createCalculator();
        calculator.add(100);
        calculator.add('200');
        expect(calculator.get()).to.equal(300);
    })
})

describe('Subtract method check', () => {
    it('Should return correct value', () => {
        let calculator = createCalculator();
        calculator.add(1000);
        calculator.subtract('200');
        calculator.subtract(300)
        expect(calculator.get()).to.equal(500);
    })
})