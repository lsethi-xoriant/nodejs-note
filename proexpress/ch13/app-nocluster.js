
var express = require("express");
var port = 3000;
var app = express();
app.get('*', function (req, res) {
    res.send('hello world');
});
app.listen(port);