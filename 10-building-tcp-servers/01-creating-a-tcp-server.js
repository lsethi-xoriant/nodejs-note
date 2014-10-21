/**
 * Created by tsq on 14-10-20.
 */
// you can create a tcp server using the `net` module like this:
if (0) {
    var net = require("net");
    net.createServer(function (socket) {
        console.log("socket", socket);
        socket.on('data', function (data) {
            // got data
            console.log("data", data);
        });
        socket.on('end', function (data) {
            console.log("end, data", data);
            // conn closed
        });
        socket.write('some string');
    }).listen(4001);
}

/**
 * Because the server object is also an event emitter, and you can listen to events during
 * its lifecycle, net.Server emits the following event:
 * |-- listening
 *      when the server is listening on the specified port and address
 */

if (1) {
    var server = require("net").createServer();
    var port = 4001;
    server.on('listening', function(){
        console.log('Server is listening on port ', port);
    });
    server.on('connection', function(socket){
        console.log("socket", socket);
        console.log('Server has a new connection');
        socket.end();
        server.close();
    });
    server.on('close', function(){
        console.log('Server is now closed');
    });
    server.on('error', function(err){
        console.log('Error occurred', err.message);
    });
    server.listen(port);
}