/**
http.get is a shortcut for the generic http.request The options are as follows:
	|-- host
		the hostname or ip address you want to make the request to
	|-- port
	|-- method
		GET(which is the default method), POST, PUT, DELETE, HEAD
	|-- path
		the request path, which should include a query string and fragments, if any, for example,
		/index?page=2
	|-- headers
		An object containing the request headers in value-name pairs. An example of a headers object
		is as follows:
		{
			"Accept":"text/json",
			"If-Modified-Since":"Sat, 28 Jan 2012 00:00:52 GMT"
		}

	the http.request function returns an http.ClientRequest object, which is a writable stream
	You can use this stream to send data as part of the request body. When you are finished writing
	the request body, end the stream to terminate the request
*/
var http = require('http');
var options = {
	host:'www.google.com',
	port:80,
	path: '/upload',
	method: 'POST'
};
var request = http.request(options, function(res) {
	// console.log('status:', res.statusCode);
	// console.log('headers:', res.headers);
	// res.setEncoding('utf8');
	// res.on('data', function(chunk) {
	// 	console.log('body:', chunk);
	// });
});

// if the server is accessible and functioning, you should get a response that triggers the response event
// you can bind to the response event on the request object like so:
// 等效于 http.request中的第二个回调函数。
request.on('response', function(res) {
	console.log('***************');
	console.log('status:', res.statusCode);
	console.log('headers:', res.headers);
	res.setEncoding('utf8');
	res.on('data', function(chunk) {
		console.log('body:', chunk);
	});
});
request.write('this is a piece of data\n');
request.write('this is another piece of data. \n');
request.end();