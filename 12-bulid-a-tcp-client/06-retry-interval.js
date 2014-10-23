// you should set the retry interval to an arbitrary value of the three seconds. 
// You also cap the number of repeated failed retries to 10. These are both arbitrary
// numbers that you should define based on your specific application.

var net = require('net');
var port = 4000;
var conn;

var retryInterval = 3000; // 3 seconds
var retriedTimes = 0;
var maxRetries = 10;

(function connect(){
	function reconnect() {
		if (retriedTimes >= maxRetries) {
			throw new Error('Max retries have been exceeded, I give up');
		}
		retriedTimes += 1;
		setTimeout(connect, retryInterval);
	}
	conn = net.createConnection(port);
	conn.on('connect', function() {
		retriedTimes = 0;
		console.log('connected to server');
	});
	conn.on('error', function(err) {
		console.log('error in connection:', err);
	});
	conn.on('close', function() {
		console.log('connection got closed, will try to reconnect');
		reconnect();
	});
	process.stdin.pipe(conn, {end: false});
}());