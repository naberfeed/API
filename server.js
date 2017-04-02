var express = require('express');
var app     = express();
var topics  = require('./topics');

var send404 = function(res){
	res.send("Oops! ...404");
}

app.use('/topics',topics);
app.use(express.static(__dirname + '/static'));
app.use('/', function(req,res){
	send404(res);
});

app.listen(8080);