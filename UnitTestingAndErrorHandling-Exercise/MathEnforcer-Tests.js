const {expect} = require('chai');
const {mathEnforcer} = require('./MathEnforcer');

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('Should return undefined if input is not number', () => {
            expect(mathEnforcer.addFive('abc')).to.be.undefined;
        })
        it('Should work properly with integers', () => {
            expect(mathEnforcer.addFive(10)).to.equal(15);
        })
        it('Should work properly with decimals', () => {
            expect(mathEnforcer.addFive(10.5684)).to.be.closeTo(15.5684, 0.01);
        })
        it('Should work properly with negative numbers', () => {
            expect(mathEnforcer.addFive(-10)).to.equal(-5);
        })
    });

    describe('subtractTen', () => {
        it('Should return undefined if input is not number', () => {
            expect(mathEnforcer.subtractTen('abc')).to.be.undefined;
        })
        it('Should work properly with integers', () => {
            expect(mathEnforcer.subtractTen(30)).to.equal(20);
        })
        it('Should work properly with decimals', () => {
            expect(mathEnforcer.subtractTen(30.5684)).to.be.closeTo(20.5684, 0.01);
        })
        it('Should work properly with negative numbers', () => {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        })
    });

    describe('sum', () => {
        it('Should return undefined if one input is not number', () => {
            expect(mathEnforcer.sum('abc', 5)).to.be.undefined;
            expect(mathEnforcer.sum(5, {})).to.be.undefined;
        })
        it('Should work properly with integers', () => {
            expect(mathEnforcer.sum(10, 20)).to.equal(30);
        })
        it('Should work properly with decimals', () => {
            expect(mathEnforcer.sum(10.56, 20.68)).to.be.closeTo(31.24, 0.01);
        })
        it('Should work properly with negative numbers', () => {
            expect(mathEnforcer.sum(-10, -25)).to.equal(-35);
        })
    })
})