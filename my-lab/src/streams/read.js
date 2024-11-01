const fs = require('fs');
const path = require('path');

const books = path.join(__dirname, '../fs/book/books.json');

function readMore(){
    if(!fs.existsSync(books)){
        throw new Error('Файл не существует');
    }

    const read = fs.createReadStream(books, {  encoding: 'utf8', highWaterMark: 200});

    read.on('data', (chunk) => {
        console.log('Чтение следующего блока данных:');
        console.log(chunk);
    })

    read.on('end', () => {
        console.log('Чтение файла завершено.');
    });

    read.on('error', (err) => {
        console.error(`Ошибка при чтении файла: ${err.message}`);
    });
}

try{
    readMore();
} catch(error){
    console.log(error.message);
}