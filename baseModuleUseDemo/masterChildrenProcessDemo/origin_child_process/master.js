//var cp = require('child_process');
//var cpus = require('os').cpus();
//
//var server = require('net').createServer();
//
//var children = [];
//for (var i = 0; i< cpus.length; i++){
//    var child = cp.fork('./child.js');
//    children.push(child);
//}
//
//
//server.listen(3000, function(){
//    console.log('http://localhost:3000');
//    for (var i = 0; i< cpus.length; i++){
//        var child = children[i];
//        child.send('parent_server', server);
//    }
//    server.close();
//});

var cp = require('child_process');
var cpus = require('os').cpus();

var server = require('net').createServer();
server.listen(3000);

console.log('master pid is ', process.pid);

var workerObj = {};
var createWorker = function(){
    var worker = cp.fork('./child.js');
    // 退出时候重启新的进程
    worker.on('exit', function(){
        console.log('Worker' + worker.pid + 'exited');
        delete workerObj[worker.pid];
        createWorker();
    });
    // 句柄转发
    worker.send('parent_server', server);

    workerObj[worker.pid] = worker;
    console.log('create worker.pid: ' + worker.pid);
};

for (var i =0; i < cpus.length; i++){
    createWorker();
}

// 自己退出让所有工作进程退出
process.on('exit', function(){
    console.log(0);
    for(var pid in workerObj){
        console.log('kill child pid:', pid);
        workerObj[pid].kill();
    }
});

// 测试进程退出
setTimeout(function(){
    console.log('begin exit master process');
    process.exit(0);
}, 5000);
