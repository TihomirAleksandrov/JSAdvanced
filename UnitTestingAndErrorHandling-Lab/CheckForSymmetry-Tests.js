const { reverse, isSymmetric } = require('./CheckForSymmetry');
const { expect } = require('chai');

describe('Reverse', () => {
    it('Should return false if input is not array', () => {
        expect(isSymmetric(5)).to.equal(false);
    })

    it('Should return true if array is symmetric', () => {
        expect(isSymmetric([1, 2, 3, 2, 1])).to.equal(true);
    })

    it('Should return false if array is not symmetric', () => {
        expect(isSymmetric([1, 2, 3, 4])).to.equal(false);
    })

    it('Should work with even count arrays', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.equal(true);
    })

    it('Should work with words', () => {
        expect(isSymmetric(['true', 'false', 'false', 'true'])).to.equal(true);
    })

    it('Should return false when array has same elements from different types', () => {
        expect(isSymmetric([1, 2, '1'])).to.equal(false);
    })
})