const {bookSelection} = require('./bookSelection');
const {expect} = require('chai');

describe("bookSelection tests", () => {
    describe("isGenreSuitable tests", () => {
        it("should return correct message when genre is not suitable", () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal('Books with Thriller genre are not suitable for kids at 12 age');
            expect(bookSelection.isGenreSuitable('Thriller', 5)).to.equal('Books with Thriller genre are not suitable for kids at 5 age');
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal('Books with Horror genre are not suitable for kids at 12 age');
            expect(bookSelection.isGenreSuitable('Horror', 5)).to.equal('Books with Horror genre are not suitable for kids at 5 age');
        });
        it("should return correct message when genre is suitable", () => {
            expect(bookSelection.isGenreSuitable('Comedy', 12)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Comedy', 5)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Drama', 20)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Drama', 100)).to.equal('Those books are suitable');
        });
     });
     describe("isItAffordable tests", () => {
        it("should throw error if input is invalid", () => {
            expect(() => bookSelection.isItAffordable([] , 5)).to.throw(Error, 'Invalid input');
            expect(() => bookSelection.isItAffordable(5 , '5')).to.throw(Error, 'Invalid input');
            expect(() => bookSelection.isItAffordable({}, 5)).to.throw(Error, 'Invalid input');
            expect(() => bookSelection.isItAffordable(5)).to.throw(Error, 'Invalid input');
        });
        it("should return correct message if result is below 0", () => {
            expect(bookSelection.isItAffordable(35, 30)).to.equal("You don't have enough money");
            expect(bookSelection.isItAffordable(35.5, 30.5)).to.equal("You don't have enough money");
        });
        it("should return correct message if result is 0 or above", () => {
            expect(bookSelection.isItAffordable(30, 35)).to.equal("Book bought. You have 5$ left");
            expect(bookSelection.isItAffordable(30, 30)).to.equal("Book bought. You have 0$ left");
            expect(bookSelection.isItAffordable(30.5, 30.6)).to.equal("Book bought. You have 0.10000000000000142$ left");
        });
     });
     describe("suitableTitles tests", () => {
        it("should throw error if input is invalid", () => {
            expect(() => bookSelection.suitableTitles([] , 5)).to.throw(Error, 'Invalid input');
            expect(() => bookSelection.suitableTitles('invalid input' , 'valid input')).to.throw(Error, 'Invalid input');
            expect(() => bookSelection.suitableTitles({}, 'valid input')).to.throw(Error, 'Invalid input');
            expect(() => bookSelection.suitableTitles('valid book')).to.throw(Error, 'Invalid input');
            expect(() => bookSelection.suitableTitles(['valid input'], ['invalid input'])).to.throw(Error, 'Invalid input');
        });
        it("should return correct array", () => {
            let expectedArr = ["IT", "Pet Sematary"];
            
            expect(bookSelection.suitableTitles([{title: "IT", genre: "Horror"}, {title: "Forest Gump", genre: "Drama"}, {title: "Pet Sematary", genre: "Horror"}], "Horror")).deep.equal(expectedArr);
        });
     });
});
