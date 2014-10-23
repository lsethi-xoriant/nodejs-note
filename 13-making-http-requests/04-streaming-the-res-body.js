// the http res is a readable stream that represents the res body data stream. As with
// any readable stream, you can pipe it into any writable stream like an http request or a file

var http = require('http');
var fs = require('fs');
var options = {
	host: 'www.google.com',
	port: 80,
	path: '/',
	method: 'GET'
};
var file = fs.createWriteStream('./test.txt');
http.request(options, function(res) {
	res.pipe(file);
}).end();

// here you are creating a file write stream and piping the res body into it.ps:注意是body而没有其他东西
// as body arrives from the server response, it's written into the file. When the body ends, the file stream
// is ended which then closes the file