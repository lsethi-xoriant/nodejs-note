/**
 * Created by tommytang on 2/8/15.
 */
var Cluster = require("cluster2");
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.send('hello');
});
var c = new Cluster({port: 3000});
c.listen(function (cb) {
    cb(app);
});