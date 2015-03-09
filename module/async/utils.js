/**
 * Created by tommytang on 3/9/15.
 */

var async = require("async");
var x = function () {
    this.name = 'bsspirit';
};
var hello = function (name, cb) {
    setTimeout(function () {
        cb(null, 'first ' + name, 'second ' + name, x, {a: '123'});
    }, 200);
};
async.log(hello, 'time');