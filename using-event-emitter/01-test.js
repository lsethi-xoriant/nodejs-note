/**
 * Created by tsq on 14-8-23.
 */
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
