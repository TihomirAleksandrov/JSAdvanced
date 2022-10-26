const { rentCar } = require('./rentCar');
const { expect } = require('chai');

describe("Tests", function () {
    describe("searchCar tests", () => {
        it("should throw error when input is invalid", () => {
            expect(() => rentCar.searchCar('invalid', 'valid')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(['car1', 'car2'], 33)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(['car1', 'car2'])).to.throw(Error, 'Invalid input!');
        });
        it('should throw error when car is not found', () => {
            expect(() => rentCar.searchCar(['Vw', 'Mercedes', 'Audi'], 'BMW')).to.throw(Error, 'There are no such models in the catalog!');
        });
        it('should return correct message when car is found', () => {
            expect(rentCar.searchCar(['Vw', 'Mercedes', 'Audi', 'Mercedes'], 'Mercedes')).to.be.equal('There is 2 car of model Mercedes in the catalog!');
        })
    });
    describe('calculatePriceOfCar tests', () => {
        it('should throw error if input is invalid', () => {
            expect(() => rentCar.calculatePriceOfCar(['invalid model'], 2)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('Audi', '2')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('Audi', 2.5)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('Audi')).to.throw(Error, 'Invalid input!');
        });
        it('should throw error if model is invalid', () => {
            expect(() => rentCar.calculatePriceOfCar('Porsche', 2)).to.throw(Error, 'No such model in the catalog!');
        });
        it('should return correct message when price is calculated', () => {
            expect(rentCar.calculatePriceOfCar('Mercedes', 2)).to.be.equal('You choose Mercedes and it will cost $100!');
            expect(rentCar.calculatePriceOfCar('Audi', 3.0)).to.be.equal('You choose Audi and it will cost $108!');
        })
    });
    describe('checkBudget tests', () => {
        it('should throw error if input is invalid', () => {
            expect(() => rentCar.checkBudget('20', 2, 500)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(20, '2', 500)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(20, 2, '500')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget([2, 3], {} , 500)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(2, 3)).to.throw(Error, 'Invalid input!');

            expect(() => rentCar.checkBudget(20.2, 2, 500)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(20, 2.4, 500)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(20, 2, 500.55)).to.throw(Error, 'Invalid input!');
        });
        it('should return correct message when budget is checked', () => {
            expect(rentCar.checkBudget(20, 2, 500)).to.be.equal('You rent a car!');
            expect(rentCar.checkBudget(20, 30, 500)).to.be.equal('You need a bigger budget!');
            expect(rentCar.checkBudget(20.0, 30.0, 500.0)).to.be.equal('You need a bigger budget!');
            expect(rentCar.checkBudget(20.0, 2.0, 500.0)).to.be.equal('You rent a car!');
        })
    })
});
