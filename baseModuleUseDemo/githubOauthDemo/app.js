var http = require('http');
var githubConfig = require('./github/config');
var github = require('./github/github');


var app = http.createServer(function(req, res, next){

	if (/authCallback/.test(req.url)){
		github.authCallback(req, res, next);
	}else{
		res.writeHead(200, {'Content-Type': "text/html"});
		res.end("<a href=https://github.com/login/oauth/authorize?scope=user:email&client_id=" + githubConfig.oauth_client_id + ">Click here</a> to login!</a>");
	}
});

// app.route('/github/authCallback', github.authCallback);

app.listen(3000, function(){
	console.log('server is run at: http://localhost:3000');
});


