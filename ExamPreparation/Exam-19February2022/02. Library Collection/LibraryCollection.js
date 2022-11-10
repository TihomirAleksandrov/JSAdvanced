class LibraryCollection {
    constructor(capacity){
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor){
        if (this.books.length === this.capacity) {
            throw new Error('Not enough space in the collection.');
        } else{
            let book = {
                bookName,
                bookAuthor,
                payed: false
            }

            this.books.push(book);

            return `The ${bookName}, with an author ${bookAuthor}, collect.`
        }
    }

    payBook(bookName){
        let searchedBook = this.books.find(x => x.bookName === bookName);

        if (!searchedBook) {
            throw new Error(`${bookName} is not in the collection.`);
        } else if(searchedBook.payed){
            throw new Error(`${bookName} has already been paid.`);
        } else{
            searchedBook.payed = true;
            return `${bookName} has been successfully paid.`;
        }
    }

    removeBook(bookName){
        let searchedBook = this.books.find(x => x.bookName === bookName);

        if (!searchedBook) {
            throw new Error("The book, you're looking for, is not found.")
        } else if(!searchedBook.payed){
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        } else{
            this.books = this.books.filter(x => x.bookName !== bookName);

            return `${bookName} remove from the collection.`
        }
    }

    getStatistics(bookAuthor){
        let outputMsg = ``;
        
        if(!bookAuthor){
            let emptySlots = this.capacity - this.books.length;
            
            outputMsg += `The book collection has ${emptySlots} empty spots left.\n`;

            let sortedBooks = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));

            for (let book of sortedBooks) {
                let paid = book.payed ? 'Has Paid' : 'Not Paid';
                
                outputMsg += `${book.bookName} == ${book.bookAuthor} - ${paid}.\n`;
            }
        } else{
            let searchedBook = this.books.find(x => x.bookAuthor === bookAuthor);

            if (!searchedBook) {
                throw new Error(`${bookAuthor} is not in the collection.`)
            } else{
                let paid = searchedBook.payed ? 'Has Paid' : 'Not Paid';

                outputMsg += `${searchedBook.bookName} == ${searchedBook.bookAuthor} - ${paid}.`;
            }
        }

        return outputMsg.trimEnd();
    }
}
