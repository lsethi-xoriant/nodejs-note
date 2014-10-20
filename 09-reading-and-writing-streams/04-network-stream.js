/**
 * Created by tsq on 14-10-20.
 */
if (0) {
    require("http").createServer(function(req, res){
        var rs = require("fs").createReadStream('./03-stream-demo.js');
        rs.on('data', function(data){
            res.write(data);
        });
        rs.on('end', function(){
            res.end();
        });
    }).listen(8080);
}


/**
 * What happens in practice is that the file will be buffered in memory for each `write` command.
 * Multiply this for every request you have, and soon you will have memory growth problems. Generally,
 * every time you have a data producer and a data consumer and the producer is faster than the consumer,
 * you have to buffer data.
 */

if (0) {
    require("http").createServer(function(req, res){
        var rs = require("fs").createReadStream('./test.js');
        rs.on('data', function(data){
            console.log('data', data);
            if (!res.write(data)) { // 说明写不进去了，开始存在排队写入了，这时候就需要暂停读写了
                rs.pause();
            }
        });
        rs.on('drain', function(){    // 队列中都写入了，这时候就可以回复读了。
            console.log("*******************************");
            rs.resume();
        });
        rs.on('end', function(){
            res.end();
        });
    }).listen(8080);
}

/**
 * 上面的可以简化成pipe()
 *  This command is part of the readable stream interface -- making the called object the pipe source--
 *  and accepts a destination writable stream as first argument
 */
if (0) {
    require("http").createServer(function(req, res){
        var rs = require("fs").createReadStream('./test.js');
        rs.pipe(res);
    }).listen(8080);
}
/**
 * By default, end() is called on the destination when the readable stream ends. You can prevent that
 * behavior by passing in end:false on the second argument options object like this:
 */
if (1) {
    require("http").createServer(function(req, res){
        var rs = require("fs").createReadStream('./03-stream-demo.js');
        rs.pipe(res, {end: false});
        rs.on('end', function(){
            res.write('all that is all'); // 自定义在末尾追加一些东西
            res.end();
        });

    }).listen(8080);
}

/**
 * The stream interface allows you to control the flow to mitigate(缓解) the slow client problem, whereby
 * you can pause and resume a readable stream. You can automate this process by using the stream.pipe()
 * method, also available in any readable stream instance.
 */