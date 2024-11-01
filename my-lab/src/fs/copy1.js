const fs = require('fs')
const path = require("path")

function copyFile(start, end){
    try{
        fs.copyFileSync(start, end);
        console.log(`Файл ${start} скопирован в ${end}`);
    } catch (error){
        console.error(`Ошибка при копировании файла ${start} в ${end}`);
    }
}

function copyDirectory(start,end)
{
    if(!fs.existsSync(start))
    {
        console.error("Директивы нет")
        process.exit(1)
    }
    if(!fs.existsSync(end_path)){
        fs.mkdirSync(end_path);
        console.log(`${end_path} была создана`);
    }
    let dataBooks = fs.readdirSync(start_path)

    for(const data of dataBooks){
        const start = path.join(start_path, data);
        const end = path.join(end_path, data);

        const stat = fs.statSync(start);

        if(stat.isDirectory()){
            copyDirectory(start, end);
        }else{
            copyFile(start, end);
        }
    }
}

const start_path = path.join(__dirname, process.argv[2]);
const end_path = path.join(__dirname, process.argv[3]);

if (!start_path || !end_path) {
  console.error('Ошибка: необходимо указать пути к исходной и целевой директориям');
} else {
  copyDirectory(start_path, end_path);
}

//тест запуск  node copy1.js book bookcopy