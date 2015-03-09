/**
 * Created by tommytang on 3/9/15.
 */
var async = require("async");
var l = require("./util").log;

/**
 串行执行一个函数数组中的每个函数，每一个函数执行完成之后才能执行下一个函数。
 
 series(tasks, [callback]);
 */
if (0) {
    // 全部函数都正常执行。每一个函数产生的值将按顺序合并成一个数组，传递给最终的cb
    async.series([
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
    })
}
if (0) {
    // 中间有函数出错。出错之后的函数不会执行，错误及之前正常执行的函数结果将传给最终的cb
    async.series([
      function(cb) {
          setTimeout(function () {
              cb(null, 1);
          }, 10);
      },
      function(cb) {
          setTimeout(function () {
              cb('err');
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
    })
}
if (0) {
    // 如果某个函数传的数据是undefined, null, {}, [] 等，他们会原样的传给最终cb
    async.series([
      function(cb) {
          setTimeout(function () {
              cb(null, undefined);
          }, 10);
      },
      function(cb) {
          setTimeout(function () {
              cb(null, null);
          }, 10);
      },
      function(cb) {
          setTimeout(function () {
              cb(null, {});
          }, 10);
      }
    ], function (err, result) {
        console.log("err\n", err);
        console.log("result\n", result);
        //  [ undefined, null, {} ]
    })
}
if (1) {
    // 以json形式传入tasks,其结果也将以json形式传给最终cb
    // if you rely on the order in which your series of functions are executed, and want this to work
    // on all platforms, consider using an array

    async.series({
        a: function(cb) {
            setTimeout(function () {
                cb (null, 2);
            }, 200)
        },
        b: function (cb) {
            setTimeout(function () {
                cb (null, 3);
            }, 200)
        },
        c: function (cb) {
            setTimeout(function () {
                cb (null, 4);
            }, 200)
        }

    }, function (err, results) {
        console.log("err\n", err);
        console.log("results\n", results);
    })

}