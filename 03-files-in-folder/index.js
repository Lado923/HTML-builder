const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'secret-folder');

fs.readdir(dirPath, {withFileTypes: true}, (error, files) => {
  if (error) return console.error(error);
  files.forEach( (file) => {
    if (file.isFile()) {
        const pathFile = path.join(__dirname, 'secret-folder', file.name);

      const fileType = path.extname(pathFile).slice(1);
      const nameFile = path.basename(pathFile, path.extname(pathFile));
      
      fs.stat(pathFile, (error, stats) => {
        if (error) return console.error(error);
        console.log(`${nameFile} - ${fileType} - ${stats.size / 1024}kb`);
      });
    }
  });
});