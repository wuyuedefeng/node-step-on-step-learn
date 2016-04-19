var fs = require('fs');

var readStream = fs.createReadStream('../../README.md');
var wrieStream = fs.createWriteStream('./test2.txt');
readStream.on('open', function(fd){
    console.log('file was opened, fd - ', fd);
});
readStream.on('data', function(chunk){
    // 如果当前读取的chunk还没有被写入到文件中,暂停读取
    if(wrieStream.write(chunk) === false){
        readStream.pause();
    }
});
readStream.on('readable', function(){
    console.log('received readable');
});
readStream.on('end', function(){
    console.log('read end');
});
readStream.on('close', function(){
    console.log('file was closed.');
});
readStream.on('error', function(err){
    console.log('error occured: %s', err.message);
});

// 耗尽的意思,表示消费完了,即写入到文件成功了
wrieStream.on('drain', function(){
    // readStream可以继续读取文件了
    readStream.resume();
});