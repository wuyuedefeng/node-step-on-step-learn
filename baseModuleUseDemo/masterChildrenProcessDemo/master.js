var cp = require('child_process');
var cpus = require('os').cpus();

var server = require('net').createServer();

var children = [];
for (var i = 0; i< cpus.length; i++){
    var child = cp.fork('./child.js');
    children.push(child);
}


server.listen(3000, function(){
    console.log('http://localhost:3000');
    for (var i = 0; i< cpus.length; i++){
        var child = children[i];
        child.send('parent_server', server);
    }
    server.close();
});
