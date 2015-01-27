#! /usr/bin/env node

// 上面的”#! /usr/bin/env node”被称为shebang，表示用后面的路径所示的程序来执行当前文件。
var fs = require("fs");
var path = process.cwd();
fs.readdir(path, function (err, files) {
    if (err) {
        return console.log(err);
    }
    for (var i = 0; i < files.length; i++) {
        console.log(files[i]);
    }
});