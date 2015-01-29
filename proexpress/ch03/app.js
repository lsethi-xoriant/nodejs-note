var book = {
    name: 'Practical Node.js',
    publisher: 'Apressr',
    keywords: 'nodejs express.js',
    discount: 'PNJS157'
};
var express = require("express");
var path = require("path");

var app = express();
console.log(app.get('env'));

app.set('view cache', true);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3000);
app.set('trust proxy', true);
app.set('json replacer', function (key, value) {
    if (key === 'discount') {
        return undefined;
    } else {
        return value;
    }
});
app.set('json spaces', 2);

app.set('case sensitive routing', true);
app.set('strict routing', true);


app.set('jsonp callback name', 'cb');
//app.set('x-powered-by', false);
//app.set('etag', false);
//app.set('query parser',  true);
app.set('subdomain offset', 3);
app.get('/jsonp', function (req, res) {
    res.jsonp(book);
});

app.get('/json', function (req, res) {
    res.json(book);
});

app.get('/users', function (req, res) {
    var q = req.query;
    console.log("q\n", q);
    console.log("req.subdomains\n", req.subdomains);
    res.send(book);
});
app.get('/users/', function (req, res) {
    res.json('users/');
});

app.get('*', function (req, res) {
    res.send('pro express.js configuratin');
});

if (app.get('env') === 'developement') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
} else {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}

var server = app.listen(app.get('port'), function () {
    console.log('express server listening on port:', server.address().port);
});