class Book {

    constructor(title, author, yearOfPublication, fileFormat) {
        this._title = title;
        this._author = author;
        this._yearOfPublication = yearOfPublication;
        this._fileFormat = fileFormat;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (typeof value !== 'string') {
            throw new Error("Title value must be a string");
        } else {
            this._title = value;
        }
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value !== 'string') {
            throw new Error("Author value must be a string");
        } else {
            this._author = value;
        }
    }

    get yearOfPublication() {
        return this._yearOfPublication;
    }

    set yearOfPublication(value) {
        if (typeof value !== 'number') {
            throw new Error("Year should be a number");
        } else {
            this._yearOfPublication = value;
        }
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        const validFileFormat = ['PDF', 'TXT', 'EPUB']
        if (!validFileFormat.includes(value)) {
            throw new Error("File format is not valid");
        } else {
            this._fileFormat = value;
        }
    }

    printInfo(title, author, yearOfPublication, fileFormat) {
        console.log(`The title is "${this.title}", the author is "${this.author}" and the book was published in ${this.yearOfPublication}, file format is ${this.fileFormat}`);
    }
}

const book = new Book("The Great Gatsby", "S. Fitzgerald", 1925, "PDF");
book.printInfo();
