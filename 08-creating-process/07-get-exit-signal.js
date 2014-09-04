/**
 * Created by tsq on 14-9-4.
 */

var spawn = require("child_process").spawn;

// Spawn the child with a 'sleep 10' command
var child = spawn('sleep', ['10']); // 要注意：10指的是秒
// here you are launching a child that will execute a sleep command for 10s, but before those
// 10s elapse(消逝), you are sending it a SIGKILL signal
setTimeout(function(){
    child.kill();
}, 1000);
child.on('exit', function(code, signal){
    if (code) {
        console.log('child process terminate', code);
    } else if (signal) {
        console.log('child process terminate because of signal', signal); //child process terminate because of signal SIGTERM
    }
});

// SIGKILL and SIGSTOP are special signals that are handled by the operating system
// and the process cannot override the default behavior.They end up terminating process,
// even if you define a signal handler for them