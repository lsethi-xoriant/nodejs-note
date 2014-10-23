// to close the connection you just have to call conn.end() like this
// conn.end();
var net = require('net');
var port = 4000;
var conn;

var retryInterval = 3000; // 3 seconds
var retriedTimes = 0;
var maxRetries = 10;
var quitting = false;

process.stdin.on('data', function(data) {
	if (data.toString().trim().toLowerCase() === 'quit') {
		quitting = true;
		console.log('quitting...');
		conn.end();
		process.stdin.end();
	} else {
		conn.write(data);
	}
});
(function connect(){
	function reconnect() {
		if (retriedTimes >= maxRetries) {
			throw new Error('Max retries have been exceeded, I give up');
		}
		retriedTimes += 1;
		setTimeout(connect, retryInterval);
	}
	conn = net.createConnection(port);
	conn.on('connect', function(con) {
		retriedTimes = 0;
		console.log('connected to server');
		conn.on('data', function(data) {
			console.log(data.toString());
		});
	});
	conn.on('error', function(err) {
		console.log('error in connection:', err);
	});
	conn.on('close', function() {
		if (!quitting) {
			console.log('connection got closed, will try to reconnect');
			reconnect();
		}
	});

}());