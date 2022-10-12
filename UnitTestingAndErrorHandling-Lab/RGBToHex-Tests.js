const {expect} = require('chai');
const {rgbToHex, rgbToHexColor} = require('./RGBToHex');

describe('Wrong input validation', () => {
    it('Should return undefined when value is below 0', () => {
        expect(rgbToHexColor(23, 34, -30)).to.be.equal(undefined);
    })
    it('Should return undefined when value is above 255', () => {
        expect(rgbToHexColor(28, 34, 300)).to.be.equal(undefined);
    })
    it('Should return undefined when value is not integer', () => {
        expect(rgbToHexColor(23, 34, '30')).to.be.equal(undefined);
    })
    it('Should return undefined when value is decimal', () => {
        expect(rgbToHexColor(23, 34, 30.4)).to.be.equal(undefined);
    })
    it('Should return undefined if one input is missing', () => {
        expect(rgbToHexColor(200, 200)).to.be.equal(undefined);
    })
    it('Should return undefined if there is no input', () => {
        expect(rgbToHexColor()).to.be.equal(undefined);
    })
})

describe('Correct input validation', () => {
    it('Should return the same color in hexadecimal format', () => {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
    })
    it('Should work with floating point integers', () => {
        expect(rgbToHexColor(0.0, 0.0, 0.0)).to.be.equal('#000000');
    })
})