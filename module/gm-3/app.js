var gm = require("gm");
var fs = require("fs");
var writeStream = fs.createWriteStream('./88.jpg');
gm('./6.jpg').resize(353, 257).autoOrient().write(writeStream, function (err) {
    console.log("err\n", err);
    if (!err) {
        console.log('hooray');
    }
});