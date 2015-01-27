/**
 * Created by tommytang on 1/27/15.
 */
var express = require("express");
var app = express();
var port = 3000;

app.get('/name/:user_name', function (req, res) {
    res.status(200);
    res.set('Content-type', 'text/html');
    /**
     * response.send() is a special express.js method that conveniently goes beyond what our old friend from the
     * core http module response.end() does. For example, the former automatically adds a `Content-Length` HTTP header
     * for us. It also augments `Content-Type` based on the data provided to it.
     */
    res.send('<html><body>' + req.params.user_name + '</body></html>');
});
app.get('*', function (request, response) {
    response.end('hello');
});
app.listen(port, function () {
    console.log('the server is running, please, open your browser at http://localhost:%s', port);
});