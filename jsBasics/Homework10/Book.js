class Book {
    constructor(title, author, yearOfPublication, fileFormat) {
        this.title = title;
        this.author = author;
        this.yearOfPublication = yearOfPublication;
        this.fileFormat = fileFormat;
    }

    printInfo() {
        console.log(`The title is "${this.title}", the author is "${this.author}", and the book was published in ${this.yearOfPublication}`);
        console.log(`The file format is ${this.fileFormat}`)
    }

    static theOldestBook(books){
        return books.reduce((oldest, current) => {
            return current.yearOfPublication < oldest.yearOfPublication ? current : oldest;
        });
       console.log('sdfsdf')
    }
}

const fiction = new Book("The Great Gatsby", "S. Fitzgerald", 1925, "PDF");
const biography = new Book("The Diary of a Young Girl", "Anna Frank", 1947, "TXT");
const fantasy = new Book("The Hobbit", "Tolkien", 1937, "PDF");

const books =[fiction, biography, fantasy];
const oldestBook = Book.theOldestBook(books);

fiction.printInfo();
fantasy.printInfo();
biography.printInfo();

console.log('\n');
console.info('The Oldest Book');
oldestBook.printInfo();

export default Book;


