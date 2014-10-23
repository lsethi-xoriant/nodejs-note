// a tcp connection may be closed by the remote server or in the event of a network 
// problem or even if your connection is idling(闲置) for too long.

var net = require('net');
var port = 4001;
var conn;
process.stdin.resume();
(function connect() {
	conn = net.createConnection(port);
	conn.on('connect', function() {
		console.log('connected to server');
	});
	conn.on('error', function(err) {
		console.log('error in connection', err);
	});
	conn.on('close', function() {
		console.log('connection got closed, will try to reconnect');
		connect();
	});
	conn.pipe(process.stdout, {end: false});
	process.stdin.pipe(conn);
}());

// however, it is not recommended that you reconnect immediately after you get disconnected or 
// that you keep retrying to connect forever. Doing so can create a kind of loop