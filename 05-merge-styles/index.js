const path = require('path');
const fs = require('fs');
const dirPath = path.join(__dirname, "styles");
const ws = fs.createWriteStream(path.join(__dirname, 'bundle.css'));
ws.on('error', error => console.error(error.message));

fs.readdir(dirPath, {withFileTypes: true}, (error, files) => {
    if (error) return console.error(error);
    for(let file of files){
        const fileType = path.extname(file.name).slice(1);
        const filePath = path.join(dirPath,file.name)
        console.log(filePath)
        if(file.isDirectory() || fileType !== "css")return;

        const streamReadable = fs.createReadStream(path.join(dirPath, file.name));
        streamReadable.on('error', error => console.error(error.message));
  
        streamReadable.pipe(ws, { end: false });
    }})