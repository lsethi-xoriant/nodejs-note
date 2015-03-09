/**
 * Created by tommytang on 3/9/15.
 */
var moment = require("moment");

exports.log = function (msg, obj) {
    process.stdout.write(moment().format('ss.SSS') + '>');
    if (obj) {
        process.stdout.write(msg);
        console.log(obj);
    } else {
        console.log(msg);
    }
}