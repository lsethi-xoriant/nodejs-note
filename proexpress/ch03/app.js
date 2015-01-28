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
