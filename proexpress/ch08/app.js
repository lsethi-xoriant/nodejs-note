var express = require("express");
var fs = require("fs");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

var routes = require("./routes/index");

var largeImagePath = path.join(__dirname, 'files', 'large-image.jpg');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('combined'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser('abc'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.get('/render', function (req, res) {
    res.render('render');
});
app.get('/render-title', function (req, res) {
    res.render('index', {title: 'Pro express.js'});
});
app.get('/locals', function (req, res) {
    res.locals = {title: 'Pro Express.js'};
    res.render('index');
});
app.get('/set-html', function (req, res) {
    /**
     * express.js' response.send() automatically adds Content-Type and other headers, but core response.end() does not
     *
     */
    res.set('Content-Type', 'text/html');
    res.end('<html><body><h1>Express.js</h1></body></html>')
});

app.get('/set-csv', function (req, res) {
    var body =  'title, tags\n' +
      'Practical Node.js, node.js express.js\n' +
      'Rapid Prototyping with JS, backbone.js node.js mongodb\n' +
      'JavaScript: The Good Parts, javascript\n';
    res.set({'Content-Type': 'text/csv', 'Content-Length': body.length, 'Set-Cookie': ['type=reader', 'language=javascript']});
    res.end(body);
});

app.get('/status', function (req, res) {
    /**
     * response.status() is chainable.
     */
    res.status(200).end();
});

/**
 * the response.send() method conveniently outputs any data application thrown at it (such as strings, js object)
 * with automatically generated proper http headers(e.g Content-Length, ETag or Cache-Control)
 *
 * String: response.send('success'); with text/html
 * Object: send({message: 'success'}); with JSON representation
 * Array: send([{title: 'practical noejs.js'}, {title: 'Rapid Prototyping with js'}]); with json representation
 * Buffer: response.send(new Buffer('Express.js Guide)); with application/octet-stream
 *
 * the status code and data parameters can be combined in a chained statement
 */
app.get('/send-err', function (req, res) {
    res.status(500).send(new Buffer('text data that will be converted into Buffer'));
});
app.get('/send-err2', function (req, res) {
    res.status(500).send({message: 'Oops, the server is down'});
});
app.get('/send-ok', function (req, res) {
    // application/json; charset=utf-8
    res.status(200).send({message: 'Data was submitted successfuly'});
});
app.get('/send-ok2', function (req, res) {
    // Content-Type:text/html; charset=utf-8
    res.status(200).send('Data was submitted successfuly');
});


/**
 * the buffer type will have Content-Type as application/octet-stream, but we can change it to text/plain
 */
app.get('/send-buf', function (req, res) {
    res.set('Content-Type', 'text/plain');
    res.send(new Buffer('text data that will be converted into buffer'));
});

app.get('/jsonp', function (req, res) {
    res.status(200).jsonp([{title: 'Express.js Guide', tags: 'node.js express.js'},
        {title: 'Rapid Prototyping with JS', tags: 'backbone.js, node.js, mongodb'},
        {title: 'JavaScript: The Good Parts', tags: 'javascript'}
    ]);
});
/**
 * the json() method is convenient way fo sending json data. It's equivalent to response.send() when data passed
 * in Array or Object type. In other cases, json() forces data conversion with JSON.stringify(). By default, the
 * header `Content-Type` is set to `application/json`, but can be overwritten prior to response.json() with
 * response.set()
 */
app.get('/json', function (req, res) {
    // application/json; charset=utf-8
    res.status(200).json([{title: 'Practical Node.js', tags: 'node.js express.js'},
        {title: 'Rapid Prototyping with JS', tags: 'backbone.js node.js mongodb'},
        {title: 'JavaScript: The Good Parts', tags: 'javascript'}
    ]);
});

app.get('/redirect1', function (req, res) {
    // Status Code:302 Moved Temporarily  Location:http://www.baidu.com
    res.redirect('http://www.baidu.com');
});
app.get('/redirect2', function (req, res) {
    // 301 is Moved Permanently  Location:http://www.baidu.com
    res.redirect(301, 'http://www.baidu.com');
});


/**
 * as fas as sending nonstreaming responses between response.end() and response.end(), you should be well
 * covered from the previous discussion.However, for streaming data back, response.send() is not going to work;
 * instead, you should use the response object(which is a writable stream and inherited from http.ServerResponse)
 */
app.get('/stream1', function (req, res) {
    var stream = fs.createReadStream(largeImagePath);
    stream.pipe(res);
});

// alternatively, use event handlers with data and end events
app.get('/stream2', function (req, res) {
    var stream = fs.createReadStream(largeImagePath);
    stream.on('data', function (data) {
        res.write(data);
    });
    stream.on('end', function () {
        res.end();
    });
});

// 非stream会耗费更多的时间， 因为 waited for the whole file to load and then sent the whole file back
app.get('/non-stream', function (req, res) {
    var file = fs.readFileSync(largeImagePath);
    res.end(file);
});
module.exports = app;


var debug = require("debug")('request');
app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port:', server.address().port);
});