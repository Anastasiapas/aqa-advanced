import Book from './Book.js'
class EBook extends Book {

    constructor(title, author, yearOfPublication, fileFormat) {
        super(title, author, yearOfPublication);
        this.fileFormat = fileFormat;
    }

    printInfo() {
        super.printInfo();
        console.log(`The file format is ${this.fileFormat}`)
    }

    static fromBook (bookInstance, fileFormat){
        return new EBook(bookInstance.title, bookInstance.author, bookInstance.yearOfPublication, fileFormat);
    }
}

const ebook = new EBook("The Great Gatsby", "S. Fitzgerald", 1925, "PDF")

ebook.printInfo();

const bookInstance = new Book("The Diary of a Young Girl", "Anna Frank", 1947);
const ebookFromBook = EBook.fromBook(bookInstance, "EPUB");
ebookFromBook.printInfo();

console.log(ebook);



