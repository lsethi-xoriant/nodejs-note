var express = require("express");
var path = require("path");
var fs = require("fs");
var compression = require("compression");
var logger = require("morgan");
var timeout = require("connect-timeout");
var methodOverride = require("method-override");
var responseTime = require("response-time");
var favicon = require("serve-favicon");
var serveIndex = require("serve-index");
var vhost = require("vhost");
var busboy = require("connect-busboy");
var errorhandler = require("errorhandler");
var app = express();


app.set('view cache', true);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3000);
app.use(compression({threshold: 1}));
app.use(logger('combined'));
app.use(methodOverride('_method'));
app.use(responseTime(4));
app.use(favicon(path.join('public', 'favicon.ico')));

app.use('/shared', serveIndex(path.join('public', 'shared'), {'icons': true}));
app.use(express.static('public'));

app.use('/upload', busboy({immediate: true}));
app.use('/upload', function (req, res) {
    req.busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
        console.log("fieldname, filename\n", fieldname, filename);
        file.on('data', function (data) {
            fs.writeFile('upload' + fieldname + filename, data);
        });
        file.on('end', function () {
            console.log('File ' + filename + ' is ended');
        });
    });
    req.busboy.on('finish', function () {
        console.log('Busboy is finished');
        res.status(201).end();
    });
});

app.get('/slow-request', timeout('1s'), function (req, res, next) {
    setTimeout(function () {
        if (req.timeout) {
            return false;
        } else {
            return next();
        }
    }, 999 + Math.round(Math.random()));
}, function (req, res, next) {
   res.send('ok');
});

app.delete('/purchase-orders', function (req, res) {
    console.log('The delete route has been triggered');
    res.status(204).end();
});

app.get('/response-time', function (req, res) {
    setTimeout(function () {
        res.status(200).end();
    }, 513);
});

app.get('/', function (req, res) {
    res.send('pro express');
});

app.get('/compression', function (req, res) {
    res.render('index');
});

app.use(errorhandler());
var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});