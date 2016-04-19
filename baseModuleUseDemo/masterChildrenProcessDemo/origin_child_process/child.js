var http = require('http');
var app = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hello world' + process.pid);
});

process.on('message', function(msg, tcp){
    if (msg == 'parent_server'){
        tcp.on('connection', function(socket){
            app.emit('connection', socket);
        });
    }
});
