/**
 * Created by tsq on 14-10-21.
 */

/**
 * You can pipe any ReadStream into the response. Here is an example that pipes a file into the response.
 */
if (0) {
    var fs = require("fs");
    require("http").createServer(function(req, res){
        res.writeHead(200, {'Content-Type': 'video/mp4'});
        var rs = fs.createReadStream('test.mp4');
        rs.pipe(res);
    }).listen(4000);
}


// piping the output of another process
// by building a streaming server that spawns, pipes the output of a process,
// and then kills the child process as needed.
var spawn = require("child_process").spawn;
require("http").createServer(function(req, res){
    var child = spawn('tail', ['-f', '/var/log/system.log']);
    child.stdout.pipe(res);
    res.on('end', function(){
        child.kill();
    });
}).listen(4000);

/**
 * shutting down the server
 *  you can stop an http server from accepting new connections by unbinding it from the port like this:
 *
 *  server.close();
 *
 *  if you want it to start listening again, you have to repeat the following:
 *  server.listen(port[, hostname]);
 */