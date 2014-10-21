/**
 * Created by tsq on 14-10-20.
 */

/**
 * when you get a 'connection' event you are also handed the `socket` object as the first argument
 * of the callback function. This `socket` object is both a read and a write stream, which means that
 * it emits 'data' events when it gets a package of data and emits the 'end' event when that connection
 * is closed.
 *
 * because the `socket` object is also a writable stream, that means you can write buffers or strings to
 * the socket by using socket.write(). You can tell the socket that it should terminate the connection
 * after all data has been written by calling `socket.end()`.
 */

if (0) {
    var server = require("net").createServer(function(socket){
        console.log('new connection');
        socket.setEncoding('utf8');
        socket.write('hello, you can start typing. Type quit to exit. \n');
        socket.on('data', function(data){
            console.log('got:', data.toString());
            if (data.trim().toLowerCase() === 'quit') {
                socket.write('bye bye');
                return socket.end();
            }
            socket.write(data);
        });
        socket.on('end', function(){
            console.log('Client connection ended');
        });
    }).listen(4001);
}

/**
 * Because the socket object is a readable stream, you can control the flow by calling `socket.pause()`
 * and `socket.resume()`, or even pipe it into a writable stream
 */
if (0) {
    var fs = require("fs");
    var net = require("net");

    var ws = fs.createWriteStream('./test.txt');

    net.createServer(function(socket){
        socket.pipe(ws);
    }).listen(4001);
}
if (1) {
    require("net").createServer(function(socket){
        require("fs").createReadStream('./test.txt').pipe(socket);
    }).listen(4001);
    // the connection will be immediately closed. That's because `pipe` will by default also end the
    // destination when the source ends.If you want to keep the conn open, you should pass {end:false}
    // into the second argument of the pipe() command.
}