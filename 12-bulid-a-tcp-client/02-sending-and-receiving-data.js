// the return value of the call to net.createConnection() is an instance of net.Socket, which represents
// the connection to the server and is both a readable and a writeable stream. It allows you to send some data:
conn.write('here is a string for you');
// You can also pass a string and specify the string encoding:
conn.write('SGVsh', 'base64');
// you can also write a raw buffer to the server:
var buffer = new Buffer('hello world');

// you can receive data from the server by listening to the data event emitted by the connection every
// time data is available.
conn.on('data', function(data) {
	console.log('some data has arrived:', data);
});

// if you don't specify the stream encoding, the data that is passed in will be a buffer. If you want that
// buffer to be encoded before being emitted, you need to specify it by using setEncoding:
conn.setEncoding('base64');

// ending the connection
conn.end('bye bye', 'utf8');
// this is equivalent to:
conn.write('bye bye', 'utf8');
conn.end();