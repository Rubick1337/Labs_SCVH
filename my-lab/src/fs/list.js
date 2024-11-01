const fs = require('fs');
const path = require('path');

const path_to_book = path.join(__dirname, 'book');
const books = path.join(path_to_book, 'books.json');

function list() {
    if (!fs.existsSync(books)) {
        throw new Error('Не существует данного файла');
    }

    let data = JSON.parse(fs.readFileSync(books));

    data.map(book => console.log(`id: ${book.id}, fileName: ${book.fileName}`));
}

try {
    list();
} catch (error) {
    console.log(error.message);
}
