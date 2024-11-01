const fs = require('fs');
const path = require('path');

function renameFile(old_name, new_name){
    try{
        if(!fs.existsSync(old_name)){
            throw new Error(`Файл ${old_name} не найден!`);
        }

        fs.renameSync(old_name, new_name);
        
        console.log(`Файл ${old_name} переименован в ${new_name}`);
    } catch(error){
        console.log(`Ошибка при переименовании файла ${old_name}`);
    }
}

const old_name = path.join(__dirname, process.argv[2]);
const new_name = path.join(__dirname, process.argv[3]);

renameFile(old_name, new_name);

// тест node rename.js rename.txt testrename.txt