/**
 * Created by tsq on 14-10-21.
 */
var http = require("http");
var server = http.createServer();
server.on('request', function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'}); // the http status200,
    res.write('hello world');
    res.end();
});
server.listen(4000);

if (0) {
    // a shortened 'hello world'
    require("http").createServer(function(req, res){
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.end('hello world');
    }).listen(4000);
}