class Book {
    constructor (title, author, read ) {
        this.title = title;
        this.author = author;
        this.read = read;
        this.describeBook = function() {
            if (read === false) {
                status = "nie";
            } else {
                status = "";
            }
            let result = `Książka ma tytuł ${title}, autorem jest ${author} i ${status} została przeczytana.`
            return result
        }
    }
}
let book1 = new Book ('Wiedźmin', 'Andrzej Sapkowski', true)
let book2 = new Book ('Umorzenie', 'Remigiusz Mróz', false)
let book3 = new Book ('Steve Jobs', 'Walter Isaacson', false)

let allBooks = [book1, book2, book3];
console.log(allBooks);

function numberOfRead (arrayOfNumbers) {
    number = 0;
    for ( i = 0; i < arrayOfNumbers.length; i++) {
        bookDescription = arrayOfNumbers[i].describeBook();
        console.log (bookDescription);
        if (arrayOfNumbers[i].read === true) {
            number += 1; 
        }
    }
    return (number)
}
booksNumber = numberOfRead(allBooks)
console.log(`Liczba przeczytanych ksiązek z biblioteki to ${booksNumber}.`)