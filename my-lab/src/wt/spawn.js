const { spawn } = require('child_process');

if (process.argv.length < 3) {
    console.error('Использование: node main.js <searchTerm>');
    process.exit(1);
}

const searchTerm = process.argv[2];
const searchProcess = spawn('node', ['./search.js', searchTerm], { cwd: __dirname });

searchProcess.stdout.on('data', (data) => {
    console.log(`Результаты поиска:\n${data}`);
});

searchProcess.stderr.on('data', (data) => {
    console.error(`Ошибка: ${data}`);
});

searchProcess.on('close', (code) => {
    console.log(`Процесс завершился с кодом ${code}`);
});
