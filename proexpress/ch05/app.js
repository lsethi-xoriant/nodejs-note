var express = require("express");
var path = require("path");
var logger = require("morgan");
var favicon = require("serve-favicon");
var errorhandler = require("errorhandler");
var jade = require("jade");
var consolidate = require("consolidate");

var app = express();

app.set('view engine', 'html');
app.engine('html', jade.__express);

app.set('port', process.env.PORT || 3000);
app.use(logger('combined'));
app.use(favicon(path.join('public', 'favicon.ico')));
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index');
});
app.use(errorhandler);
var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});