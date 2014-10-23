/**
*	host不写的话默认是localhost
	第三个的回调函数可以用下面的代替：
	conn.once('connect', connectionListener);
*/
var net = require('net');
var port = 4000;
var host = 'localhost';
var conn = net.createConnection(port, host, function(con) {
	console.log('we have a new connection', con);
});