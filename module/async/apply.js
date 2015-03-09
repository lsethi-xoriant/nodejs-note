/**
 * Created by tommytang on 3/9/15.
 */
var async = require("async");
var fs = require("fs");

/**
 apply是一个非常好用的函数， 可以让我们给一个函数预绑定多个参数并生成一个可直接调用的新函数，简化代码。
 */

if (0) {
    async.parallel([
        function (cb) {
            fs.writeFile('testfile1', 'test1', cb);
        },
        function (cb) {
            fs.writeFile('testfile2', 'test2', cb);
        }
    ]);

    async.parallel([
        async.apply(fs.writeFile, 'testfile1', 'test1'),
        async.apply(fs.writeFile, 'testfile2', 'test2')
    ]);
}

