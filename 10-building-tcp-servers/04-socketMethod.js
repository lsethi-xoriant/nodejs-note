/**
 * Created by tsq on 14-10-21.
 */

// If you want to turn this off and force data to be sent immediately after each write command
// use this:
socket.setNoDelay(true);
// Of course, you can always revert this setting like this
socket.setNoDelay(false);

// Listening for client connections
// after the server is created, you can bind it to a specific tcp port like this
var port = 4001;
var host = '0.0.0.0';
server.listen(port, host);

// the second argument(host) is optional. If it's omitted, the server will accept connections directed
// to any ip address
server.listen(port);

// Closing the server
// this method closes the server, preventing it from accepting new connections. This function is
// asynchronous, and the server will emit the close event when it closes:
var server;
server.close();
server.on('close', function(){
    console.log('server closed');
});

// when handling a socket on the client or the server you can (and should) handle errors by listening
// to the `error` event like this:
require("net").createServer(function(socket){
    socket.on('error', function(error){
        // do something
    });
});
// If you fail to catch an error, Node will handle an uncaught exception and terminate the current process.

/**
 * You can choose to catch uncaught exceptions--preventing your node process from being terminated
 * by doing something like this:
 */
process.on('uncaughtException', function(err){
    // do something
});