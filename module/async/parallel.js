/**
 * Created by tommytang on 3/9/15.
 */


var async = require("async");

/**
 *  并行执行多个函数，每个函数都是立即执行，不需要等待其他函数先执行，传递给最终cb的数组中的数据按照tasks中声明的顺序。而不是执行完成的顺序
 *  其实和series一样，只不过它是并行执行的。
 *
 */
if (0) {
    async.parallel([
        function(cb) {
            setTimeout(function () {
                cb(null, 1);
            }, 10);
        },
        function(cb) {
            setTimeout(function () {
                cb(null, 2);
            }, 10);
        },
        function(cb) {
            setTimeout(function () {
                cb(null, 3);
            }, 10);
        }
    ], function (err, result) {
        console.log("err\n", err);
        console.log("result\n", result);
    });
}

if (1) {
    async.parallelLimit([
        function(cb) {
            setTimeout(function () {
                cb(null, 1);
            }, 10);
        },
        function(cb) {
            setTimeout(function () {
                cb(null, 2);
            }, 10);
        },
        function(cb) {
            setTimeout(function () {
                cb(null, 3);
            }, 10);
        }
    ], 2, function (err, result) {
        console.log("err\n", err);
        console.log("result\n", result);
    });
}