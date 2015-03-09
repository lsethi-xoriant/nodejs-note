/**
 * Created by tommytang on 3/9/15.
 */
var async = require("async");

/**
 按顺序依次执行一组函数。每个函数产生的值，都将传给下一个。
 如果中途出错，后面的函数将不会被执行。错误信息将传给waterfall(瀑布)最终的cb,之前产生的结果被丢弃
 注意，该函数不支持json格式的tasks
 */
if (0) {
    async.waterfall([fn1, fn2, fn3], cb);
    function fn1(cb) {
        cb(null, 10, 20);
    }
    function fn2(n1, n2, cb) {
        console.log('n1:', n1);
        console.log('n2:', n2);
        cb(null, 2);
    }
    function fn3(n, cb) {
        console.log('n3:', n);
        cb(null, 3);
    }
    function cb(err, result) {
        console.log("err\n", err);
        console.log("result\n", result);
    }
}
if (1) {
    // 中途有函数出错，其err直接传给最终的cb, 结果被丢弃，后面的函数不再执行。
    async.waterfall([fn1, fn2, fn3], cb);
    function fn1(cb) {
        cb(null, 10, 20);
    }
    function fn2(n1, n2, cb) {
        console.log('n1:', n1);
        console.log('n2:', n2);
        cb('err');
    }
    function fn3(n, cb) {
        console.log('n3:', n);
        cb(null, 3);
    }
    function cb(err, result) {
        console.log("err\n", err);
        console.log("result\n", result);
    }
}