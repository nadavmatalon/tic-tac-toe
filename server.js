var express = require('express');
var server = express();
var http = require('http').Server(server);

server.use(express.static(__dirname + '/public'));

server.get('/', function(request, response) {
	response.sendFile(__dirname + '/lib/index.html');
});

http.listen(3000, function() {
	console.log("Server listening on 3000");
});

module.exports = http;