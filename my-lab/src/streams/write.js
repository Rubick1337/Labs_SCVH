const fs = require('fs');
const path = require('path');
const book_path = path.join(__dirname, '../fs/book/books.json');
function write(newBook) {
    if (!fs.existsSync(book_path)) {
        throw new Error('Файл не существует');
    } else {
        const data = fs.readFileSync(book_path, 'utf8');
       
        try {
            all_book = JSON.parse(data);
        } catch (error) {
            console.error('Ошибка JSON:', error.message);
        }
    }

    all_book.push(newBook);

    const write = fs.createWriteStream(book_path, { flags: 'w', encoding: 'utf8' });

    const books = JSON.stringify(all_book, null, 2);

    write.write(books, (err) => {
        if (err) {
            console.error(`Ошибка при записи в файл: ${err.message}`);
        } else {
            console.log('Успешно добавлен');
        }
    });

    write.end();
}



const newBook = {
    id: "1730236855360",
    title: "New Book Title",
    description: "Description of the new book",
    filename: "project_1730236855360.json"
};

try {
    write(newBook);
} catch (error) {
    console.log(error.message);
}
