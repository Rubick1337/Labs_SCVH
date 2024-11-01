const fs = require('fs');
const path = require('path');

const path_to_book = path.join(__dirname, 'book');
const books = path.join(path_to_book, 'books.json');

function read(id){
    if(!fs.existsSync(books)){
        throw new Error('Не существует данного файла');
    }

    let data = JSON.parse(fs.readFileSync(books));

    const book = data.find(book => book.id == id);

    if(book){
        console.log(`id: ${book.id}, fileName: ${book.fileName} `)
    } else{
        console.log('такого проекта не существует');
    }
}

const id = process.argv[2];


try{
    read(id);
} catch(error){
    console.log(error.message);
}

//тест запуск node read id 