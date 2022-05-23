var fs = require('fs');
const path = require('path');
const { stdout, stdin } = require('process');

fs.open('02-write-file\\text.txt', 'w', (err) => {
    if(err) throw err;
});


const ws = fs.createWriteStream(path.join(__dirname, 'text.txt'));

stdout.write('Привет! Введите текст:');
stdin.on('data', (data) => {
  if (data.toString().slice(0, -2) !== 'exit') {
    ws.write(data.toString());
  } else {
    stdout.write('Спасибо, текст сохранен!');
    process.exit();
  }
});
process.on('SIGINT', () => {
  stdout.write('Спасибо, текст сохранен!');
  process.exit();
});