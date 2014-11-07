/**
 * Created by tsq on 14-8-25.
 */

/**
 * any object that implements the event emitter pattern (like a tcp socket, an http request, and many others)
 * implements a set of method:
 * .addListener and .on --- To add an event listener to an event type
 * .once -- To attach an event listener to a given event type that will be called at most once.
 * .removeEventListener -- to remove a specific event listener of a given event
 * .removeAllEventListeners -- To remove all event listerners of a given event type
  * @type {exports}
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