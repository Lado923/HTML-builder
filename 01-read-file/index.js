const path = require('path');
const fs = require('fs');

const filePath = path.resolve('01-read-file\\text.txt');

var stream = new fs.ReadStream(filePath, {encoding: 'utf-8'});

stream.on('readable', function(){
    var data = stream.read();
    console.log(data);
})


