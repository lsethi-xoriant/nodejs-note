var net = require('net');
var port = 4000;
var conn = net.createConnection(port);
conn.on('connect', function() {
	console.log('connected to server');
});
conn.on('error', function(err) {
	console.log('error in connection:', err);
});

// you can resume it by calling the resume method on the stream.
// process.stdin.resume();

// you have a writable stream to the server and a readable stream from the user input
// you can glue them together by using the pipe method like this:
// process.stdin.pipe(conn);

// every time the process.stdin stream is flushed -- which usually happens after the user 
// enters a new line character -- the data is piped to the server through the conn writable stream.