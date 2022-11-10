const {flowerShop} = require('./flowerShop');
const {expect} = require('chai');

describe("flowerShop tests", () => {
    describe("calcPriceOfFlowers tests", () => {
        it("should throw exception when value is invalid", () => {
            expect(() => flowerShop.calcPriceOfFlowers(['invalid flower name'], 20, 10)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('flower', '20', 10)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('flower', 20, '10')).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('flower', 20.5, 10)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('flower', 20, 10.5)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('flower', 20)).to.throw(Error, 'Invalid input!');
        })
        it("should return correct message", () => {
            expect(flowerShop.calcPriceOfFlowers('flower', 20, 10)).to.be.equal('You need $200.00 to buy flower!')
            expect(flowerShop.calcPriceOfFlowers('flower', 20.0, 10.0)).to.be.equal('You need $200.00 to buy flower!')
        });
     });
     describe('checkFlowersAvailable tests', () => {
        it('should return correct message', () => {
            expect(flowerShop.checkFlowersAvailable('lilly', ['lilly', 'orchid'])).to.be.equal('The lilly are available!');
            expect(flowerShop.checkFlowersAvailable('lilly', ['rose', 'orchid'])).to.be.equal('The lilly are sold! You need to purchase more!');
        })
     });
     describe('sellFlowers tests', () => {
        it('should throw error when input is invalid', () => {
            expect(() => flowerShop.sellFlowers('flower', 1)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers(['lilly', 'rose', 'orchid'], '1')).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers(['lilly', 'rose', 'orchid'], -1)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers(['lilly', 'rose', 'orchid'], 3)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers(['lilly', 'rose', 'orchid'], 5)).to.throw(Error, 'Invalid input!')
            expect(() => flowerShop.sellFlowers(['lilly', 'rose', 'orchid'], 1.5)).to.throw(Error, 'Invalid input!')
        });
        it('should remove correct flower', () => {
            expect(flowerShop.sellFlowers(['lilly', 'rose', 'orchid'], 1)).to.be.equal('lilly / orchid');
            expect(flowerShop.sellFlowers(['lilly', 'rose', 'orchid'], 1.0)).to.be.equal('lilly / orchid');
            expect(flowerShop.sellFlowers(['lilly', 'rose'], 1)).to.be.equal('lilly');
        })
     })
});
