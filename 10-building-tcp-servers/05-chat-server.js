/**
 * Created by tsq on 14-10-21.
 */
var net = require("net");
var server = net.createServer();
var sockets = []; // store all the connections in a central place.
server.on('error', function(err){
    console.log('Server error:', err.message);
});
server.on('close', function(){
    console.log('Server closed');
    var index = sockets.indexOf(sockets);
    sockets.splice(index, 1);
});
server.on('connection', function(socket){
    console.log('got a new connection');
    // every time the server gets a new connection, you need it to listen for the incoming data by
    // binding to the data event.
    sockets.push(socket);
    socket.on('data', function(data){
        console.log('got data:', data.toString());
        sockets.forEach(function(otherSocket){
            if (otherSocket !== socket) {
                otherSocket.write(data); // you need to send it to every other connected user.
            }
        });
    });
});
server.listen(4001);

/**
 * A tcp server will emit certain events during its lifecycle, namely, 'listening' events when you set it
 * to listen on a certain port, 'close' events when it gets closed, and 'error' events when an error occurs.
 */