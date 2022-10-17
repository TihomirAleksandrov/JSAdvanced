const {lookupChar} = require('./CharLookup');
const {expect} = require('chai');

describe('Validation check', () => {
    it('Should return undefined if first input is not string', () => {
        expect(lookupChar(['a', 'b', 'c'], 2)).to.be.undefined;
    })
    it('Should return undefined if second input is not integer', () => {
        expect(lookupChar('abcd', 'a')).to.be.undefined;
    })
    it('Should return undefined if second input is decimal', () => {
        expect(lookupChar('abcd', 2.5)).to.be.undefined;
    })
    it('Should return undefined if one input is missing', () => {
        expect(lookupChar('abcd')).to.be.undefined;
    })
    it('Should return Incorrect index if index is bigger than text length', () => {
        expect(lookupChar('abcd', 5)).to.equal('Incorrect index');
    })
    it('Should return Incorrect index if index is negative number', () => {
        expect(lookupChar('abcd', -5)).to.equal('Incorrect index');
    })
})

describe('Functionality check', () => {
    it('Should work correctly', () => {
        expect(lookupChar('abcd', 1)).to.equal('b');
    })
    it('Should work correctly with floating point integers', () => {
        expect(lookupChar('abcd', 2.0)).to.equal('c');
    })
})