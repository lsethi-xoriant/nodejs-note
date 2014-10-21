/**
 * Created by tsq on 14-10-20.
 */
/**
 * In node you can set tcp connections to time out because of inactivity. You can automatically close
 * the connection when no traffic is being sent or received fro some time. You can activate and define
 * the timeout by calling `setTimeout(milliseconds)` on the connection.You can also listen for the
 * `timeout` event on the `socket` object
 */

var timeout = 5000; // 5 seconds
require("net").createServer(function(socket){
    /*
    socket.setTimeout(timeout);
    socket.on('timeout', function(){
        socket.write('idle timeout, disconnecting bye!');
        socket.end();
    });*/

    // or, you can use this shorter form by passing the event listener in the second argument of
    // socket.setTimeout():
    socket.setTimeout(timeout, function(){
        socket.end('hello, bye');
    })
}).listen(4001);