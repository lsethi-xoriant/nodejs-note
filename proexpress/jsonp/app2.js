
require("http").createServer(function (req, res) {
    require("fs").readFile(__dirname + '/index.html', function (err, data) {
        res.writeHead(200);
        res.end(data);
    });
}).listen(3002, function (err) {
    console.log('app listen on:', 3002);
});