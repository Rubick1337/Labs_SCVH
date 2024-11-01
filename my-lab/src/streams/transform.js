const { Transform, pipeline } = require('stream');

class BookTransform extends Transform {
    _transform(chunk) {
        try {
            const book = JSON.parse(chunk.toString());
            const transformedBook = {
                ...book,
                publicationYear: new Date().getFullYear()
            };

            const output = JSON.stringify(transformedBook, null, 2) + '\n';
            this.push(output);
        } catch (error) {
            console.error('Ошибка при парсинге JSON:', error.message);
        }
    }
}

const readStream = process.stdin; // Считывание из stdin
const writeStream = process.stdout; // Вывод в stdout

pipeline(
    readStream,
    new BookTransform(),
    writeStream,
    (err) => {
        if (err) {
            console.error('Ошибка в процессе трансформации:', err);
        } else {
            console.log('Преобразование завершено успешно!');
        }
    }
);
