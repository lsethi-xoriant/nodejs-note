var book = {
    name: 'Practical Node.js',
    publisher: 'Apress',
    keywords: 'nodejs express.js',
    discount: 'PNJS15'
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


app.set('jsonp callback name', 'cb');
app.get('/jsonp', function (req, res) {
    res.jsonp(book);
});

app.get('/json', function (req, res) {
    res.json(book);
});

var server = app.listen(app.get('port'), function () {
    console.log('express server listening on port:', server.address().port);
});