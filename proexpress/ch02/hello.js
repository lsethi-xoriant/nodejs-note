/**
 * Created by tommytang on 1/27/15.
 */
var express = require("express");
var app = express();
var port = 3000;

/**
 * Using Request Handlers
 * the second parameter to the ap.get() method is a request handler. A typical Express.js request handler is similar
 * to the one we pass as a callback to the native/core. Node.js http.createServer() method. A request handler is a function
 * that will be executed every time the server receives a particular request.
 */
app.get('*', function (request, response) {
    response.end('hello');
});
app.listen(port, function () {
    console.log('the server is running, please, open your browser at http://localhost:%s', port);
})