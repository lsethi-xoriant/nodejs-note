/**
 * Created by tsq on 14-9-4.
 */

var spawn = require("child_process").spawn;

if (0) {
    // Spawn the child with a ls -al 
    var child = spawn('ls', ['-la']);

    child.stdout.on('data', function(data){
        console.log('data from child' + data);
    });

// when child exits
    child.on('exit', function(code){
        console.log("code", code); // 0
    });
}

if (1) {
    var child = spawn('ls', ['does_not_exist.txt']);
    // when the child process exits
    child.on('exit', function(code){
        console.log('code', code);
    })
}