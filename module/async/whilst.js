/**
 * Created by tommytang on 3/9/15.
 */
var async = require("async");

/**
 Repeatedly call fn, while test returns true. Calls callback when stopped, or an error occurs
 Arguments
    whilst(test, fn , cb);
 
    |-- test()
        synchronous truth test to perform before each execution of fn
    |-- fn(callback)
        A function which is called time test passes. The function is passed a callback(err), which must be
        it has completed with an optional err argument. 异步调用时产生的值实际上被丢弃了
    |-- callback(err)
 */
if (0) {
    var count = 0;
    async.whilst(test, fn, cb);
    function test() {
        return count < 5;
    }
    function fn(cb) {
        console.log("count:", count);
        count++;
        setTimeout(cb, 1000);
    }
    function cb(err) {
        console.log("err\n", err);
    }
}