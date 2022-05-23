const path = require('path');
const fs = require('fs');

const promises = require('fs/promises');


async function copyDir(params) {

    await fs.promises.rm(path.join(__dirname, 'files-copy'), {force: true, recursive: true });

    await fs.promises.mkdir(path.join(__dirname, 'files-copy'), { recursive: true });

    const pathOrigin = path.join(__dirname, 'files');

    const filesOrigin = await fs.promises.readdir(pathOrigin, {withFileTypes: true});

    for (let item of filesOrigin) {   
        
        const fileOrigin = path.join(__dirname, 'files', item.name);
        const fileCopy = path.join(__dirname, 'files-copy', item.name);
        
        await fs.promises.copyFile(fileOrigin, fileCopy);
    };

};

copyDir()

