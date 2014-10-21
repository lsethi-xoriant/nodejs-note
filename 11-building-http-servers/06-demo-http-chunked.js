/**
 * Created by tsq on 14-10-21.
 */

require("http").createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var left = 10000;
    var interval = setInterval(function () {
        for (var v = 0; v < 100; v++) {
            res.write(Date.now() + ' ');
        }
        if (--left == 0) {
            clearInterval(interval);
            res.end();
        }
    }, 1);
}).listen(4000);