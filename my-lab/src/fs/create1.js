const fs = require("fs");
const path = require("path");

const path_to_book = path.join(__dirname, 'book');
const books = path.join(path_to_book, 'books.json');

function generateId() {
    return `${Date.now()}`;
}

function addBook(book) {

    const id = generateId();
    const fileName = `book_${id}.json`;
    const pathToBook = path.join(path_to_book, fileName);

    if (!fs.existsSync(path_to_book)) {
        fs.mkdirSync(path_to_book);
    }

    if (fs.existsSync(pathToBook)) {
        console.error('Запись уже существует');
        return;
    }

    fs.writeFileSync(pathToBook, JSON.stringify(book, null, 2), 'utf8');

    let data = [];
    if (fs.existsSync(books)) {
        const booksData = fs.readFileSync(books, "utf8");
        data = JSON.parse(booksData);
    }

    let indexEntry = {
        id: id,
        fileName: fileName
    };
    data.push(indexEntry);

    fs.writeFileSync(books, JSON.stringify(data, null, 2), 'utf8');

    console.log('Новая запись успешно добавлена.');
}

const args = process.argv.slice(2);
if (args.length < 4) {
    console.error('Недостаточно аргументов. Использование: node create.js "Название книги" "Автор книги" "ISBN" "Год издания"');
    process.exit(1);
}

let newRecord = {
    title: args[0],
    author: args[1],
    isbn: args[2],
    year: args[3],
    description: args[4] || 'Описание отсутствует'
};

addBook(newRecord);

// тест запуск node create1.js "Название книги" "Автор книги" "ISBN" "Год издания" "Описание книги"