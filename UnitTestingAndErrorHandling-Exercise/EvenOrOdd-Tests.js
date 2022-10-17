const {isOddOrEven} = require('./EvenOrOdd');
const {expect} = require('chai');

describe('Validation check', () => {
    it('Should return undefined if input is array', () => {
        expect(isOddOrEven(['aa', 'bb'])).to.be.undefined;
    })
    it('Should return undefined if input is integer', () => {
        expect(isOddOrEven(5)).to.be.undefined;
    })
})

describe('Functionality check', () => {
    it('Should return odd when input length is odd number', () => {
        expect(isOddOrEven('abcde')).to.equal('odd');
    })
    it('Should return even when input length is even number', () => {
        expect(isOddOrEven('abcd')).to.equal('even');
    })
    it('Should work correctly with sentences', () => {
        expect(isOddOrEven('Hello from SoftUni')).to.equal('even');
    })
})