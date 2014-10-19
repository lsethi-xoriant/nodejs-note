var http = require("http");
var url = require("url");
function start(route, handle) {
	function onRequest(req, res) {
		var pathname = url.parse(req.url).pathname;
		var postData = '';
		  req.setEncoding('utf8');
		console.log('kkkkk');
		req.on('data', function(postDataChunk) {
			postData += postDataChunk;
			console.log("Received post data chunk " + postDataChunk + ' ');
		});
		req.addListener('end', function() {

	    	route(handle, pathname, res, postData);
		});
		// console.log("Request for" + pathname + " received.");
		// console.log(content);
		// res.writeHead(200, {"Content-Type":"text/plain"});
		// res.write(content);
		// res.end();
	}
	http.createServer(onRequest).listen(8888);
	console.log("Server has started");
}
exports.start = start;