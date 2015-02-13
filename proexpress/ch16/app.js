/**
 * Created by tommytang on 2/12/15.
 */
var http = require("http");
var express = require("express");
var path = require("path");
var logger = require("morgan");
var favicon = require("serve-favicon");
var errorhandler = require("errorhandler");
var bodyParser = require("body-parser");

var app = express();
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3000);
app.use(logger('combined'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function (req, res) {
    res.render('index');
});

app.use(errorhandler());

var server = http.createServer(app);
var io = require("socket.io").listen(server);
io.sockets.on('connection', function (socket) {
    socket.join('test');
    socket.on('move', function (data) {
        console.log("data\n", data);
        io.sockets.in('test').emit('receive', data.msg);
    });

});

server.listen(app.get('port'), function () {
    console.log('express server listening on port', app.get('port'));
});