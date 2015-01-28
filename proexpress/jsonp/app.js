var express = require("express");
var app = express();
app.get('/jsonp', function (req, res) {
    var callback = req.query.callback;
    var data = callback + '(' + '{"Email":"zhuww@outlook.com", "remark":"heelo"}' + ')';
    res.send(data);
});
app.listen(3001);
console.log('app server start on:', 3001);