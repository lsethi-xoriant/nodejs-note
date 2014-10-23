var http = require('http');
var options = {
	host:'www.baidu.com',
	port: 80,
	path: '/index.html'
};
http.get(options, function(res) {
	console.log('got response:' + res.statusCode);
});