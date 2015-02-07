/**
 * Created by tommytang on 1/27/15.
 */
var express = require("express");
var app = express();
var port = 3000;
var xml2js = require("xml2js");
/**
 * Using Request Handlers
 * the second parameter to the ap.get() method is a request handler. A typical Express.js request handler is similar
 * to the one we pass as a callback to the native/core. Node.js http.createServer() method. A request handler is a function
 * that will be executed every time the server receives a particular request.
 */
app.use(function xmlBodyParser(req, res, next) {
    if (req.url !== '/weixin') {
        return next();
    }

    // ignore get and head method
    if (req.method !== 'POST') {
        console.log('url is /weixin but method is not post');
        return next();
    }

    // check Content-Type
    if ('text/xml' != mime(req)) {
        console.log('content type is not text/xml');
        return next();
    }

    // parse
    var buf = '';
    req.setEncoding('utf8');
    req.on('data', function (chunk) {
        buf += chunk
    });
    req.on('end', function () {
        console.log("buf\n", buf);
        var parseString = xml2js.parseString;
        parseString(buf, function (err, json) {
            if (err) {
                err.status = 400;
                next(err);
            } else {
                req.body = json;
                next();
            }
        });
    });
});
app.all('*', function (request, response) {

    response.end('hello');
});
app.listen(port, function () {
    console.log('the server is running, please, open your browser at http://localhost:%s', port);
});

function mime(req) {
    var str = req.headers['content-type'] || '';
    return str.split(';')[0];
}
