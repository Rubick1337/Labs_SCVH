const fs = require("fs");
const path = require("path");

const path_to_book = path.join(__dirname, 'book');
const books = path.join(path_to_book, 'books.json');

function deleteFile(id) {
    let allBooks;

    // Читаем и парсим данные из books.json
    try {
        allBooks = JSON.parse(fs.readFileSync(books));
    } catch (error) {
        console.error(`Ошибка при чтении файла books.json: ${error.message}`);
        process.exit(1);
    }

    const remove = allBooks.find(book => book.id == id);

    if (remove) {
        const remove_path = path.join(path_to_book, `book_${remove.id}.json`); 
        try {
            fs.unlinkSync(remove_path);
            console.log(`Файл ${remove_path} успешно удалён.`);
        } catch (error) {
            console.error(`Ошибка при удалении файла: ${error.message}`);
            process.exit(1);
        }

        allBooks = allBooks.filter(book => book.id != id);

        fs.writeFileSync(books, JSON.stringify(allBooks, null, 2));
        console.log(`Книга c id ${id} удалена.`);
    } else {
        console.log(`Книга c id ${id} не найдена.`);
    }
}

const id = process.argv[2];

try {
    deleteFile(id);
} catch (error) {
    console.log(error.message);
}
// тест запуск node delete id книги