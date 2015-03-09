/**
 * Created by tommytang on 3/9/15.
 */

var async = require("async");
var l  = require("./util").log;
/**
 如果想对同一个集合中的所有元素都执行同一个异步操作，可以利用each函数
 |-- async提供了三种方式
    |-- 集合中的所有元素并行执行
    |-- 一个一个顺序执行
    |-- 分批执行，同一批内并行，批与批之间按顺序
 |-- 如果中途错误，则错误将上传给最终的callback处理。其他已经启动的任务继续执行，未启动的忽略
 |-- 语法
    each(arr, iterator(item, callback), callback(err))
 */
var arr = [
    {name: 'Jack', delay: 200},
    {name: 'Mike', delay: 100},
    {name: 'Tom', delay: 300}
];

if (0) {
    // 并行执行, err回调中只有一个err参数
    async.each(arr, function (item, cb) {
        l('1.1 enter:' + item.name);
        setTimeout(function () {
            l('1.1 handle:' + item.name);
            cb(null, item.name);
        }, item.delay);
    }, function (err, result) {
        l('1.1 err:' + err);
        l('result:' + result); // 没有值: undefined
    });
}

if (0) {
    // 如果中途出错，则出错后马上调用最终的cb，其他未执行完的任务继续执行
    async.each(arr, function (item, cb) {
        l('1.2 enter:' + item.name);
        setTimeout(function () {
            l('1.2 handle:' + item.name);
            if (item.name === 'Jack') {
               return cb('myerr'); //一定要加一个return
            }
            cb(null);
        }, item.delay);
    }, function (err) {
        l('1.2 err:' + err);
    });
}

if (0) {
    // 与each相似，但不是并行执行。而是一个个按顺序执行
    async.eachSeries(arr, function (item, cb) {
        l('1.3 enter:' + item.name);
        setTimeout(function () {
            l('1.3 handle:' + item.name);
            cb(null);
        }, function (err) {
            l('1.3 err:' + err);
        });
    });
    /*
     08.704>1.3 enter:Jack
     08.711>1.3 handle:Jack
     08.711>1.3 enter:Mike
     08.713>1.3 handle:Mike
     08.713>1.3 enter:Tom
     08.715>1.3 handle:Tom
     */
}
if (0) {
    // 如果中途出错，则马上把错误传给最终的cb，还未执行的不再执行
    async.eachSeries(arr, function (item, cb) {
        l('1.3 enter:' + item.name);
        setTimeout(function () {
            l('1.3 handle:' + item.name);
            if (item.name === 'Mike') {
                return cb('err');
            }
            cb(null);
        }, function (err) {
            l('1.3 err:' + err);
        });
    });
    /*
     06.051>1.3 enter:Jack
     06.059>1.3 handle:Jack
     06.060>1.3 enter:Mike
     06.062>1.3 handle:Mike
     */
}

if (0) {
    // 分批执行，第二个参数是每一批的个数。每一个批内并行执行，但批与批之间按顺序执行
    // Note that the items in arr are not processed in batches, so there is no guarantee that the first limit iterator function
    // will complete before any others are started
    async.eachLimit(arr, 2, function (item, cb) {
        l('1.5 enter:' + item.name);
        setTimeout(function () {
            l('1.5 handle:' + item.name);
            cb(null);
        }, item.delay);
    }, function (err) {
        l('1.5 err:' + err);
    });
}
if (1) {
    // 如果中途出错，已经执行的还会继续执行下去，未执行的就不执行了。
    var arr = [
        {name: 'Jack', delay: 200},
        {name: 'Mike', delay: 100},
        {name: 'Mike2', delay: 100},
        {name: 'Mike3', delay: 100},
        {name: 'Mike4', delay: 100},
        {name: 'Tom', delay: 300}
    ];
    async.eachLimit(arr, 2, function (item, cb) {
        l('1.6 enter:' + item.name);
        setTimeout(function () {
            if (item.name === 'Jack') {
                return cb('err');
            }
            l('1.6 handle:' + item.name);

            cb(null);
        }, item.delay);
    }, function (err) {
        l('1.5 err:' + err);
    });
}


