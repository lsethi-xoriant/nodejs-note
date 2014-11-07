/**
 * Created by tsq on 14-8-23.
 */

/**
 * When you use an event emitter pattern, two or more objects are involved -- the event emitter and
 * one or more event listeners
 *
 * An event emitter is an object that -- as the name says -- emits events. An event listener is a part
 * of the code that binds to the event emitter and listners for certain types of events
 */
var http = require('http');
var req = http.request(options, function(response) {
    /**
     * when complete, the htpp-request function invokes the callback, passing a response object. This response
     * object is an event emitter and,according to the node documentation, can emit, among others, the data
     * and end events. you can then registering  callback function s that wil be invoked every time any of these
     * events happen.
     */
    response.on('data', function(data) {
        console.log('sme data from the', data);
    });
    response.on('end', function() {
        console.log('response ended');
    });
});

function fun1() {
    console.log(11);
}

function fun2(para, cb) {
    console.log(22);
    cb();
}
fun2('tst', fun1);
function fun3(param, fu) {
    console.log(param);
    fu();
}
fun3('tst', function(){
    console.log(333);
});

function readFile(param, cb) { 
    var err = 'err';
    var content = 'content';
    cb(err, content)
}
readFile('l', function(err, content){
    console.log("err", err);
    console.log("content", content);
})

var fs = require("fs");
fs.readFile('/etc/passwd', function(err, fileContent){
    if (err) {
        throw err;
    }
    console.log('file content', fileContent.toString());
});
