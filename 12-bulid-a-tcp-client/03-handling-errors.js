var net = require('net');
var conn = net.createConnection('82837');
conn.on('error', function(err) {
	console.log('i got this error code:' + err.code); //econnrefused
});