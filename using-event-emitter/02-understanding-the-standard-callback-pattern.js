/**
 * Created by tsq on 14-8-25.
 */

var http = require("http");
var options = 'http://www.example.com';
var req = http.request(options, function(res){ // 这里的res是一个event emitter,这里他能够emit data和end事件
    res.on('data', function(data){  // 给事件注册回调函数
        console.log("some data from the res", data);
    });
    res.on('end', function(){
        console.log('res end');
    });
});
req.end();