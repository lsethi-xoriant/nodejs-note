/**
 * Created by tsq on 14-9-1.
 */


// when you need to launch an external shell command or an executable file, you may
// do so by using the child_process module
var child_process = require("child_process");
var exec = child_process.exec;
// launch the command cat *.js | wc -1


if (0) {
    /**
     *  the first argument to the exec function is a string with the command as you would launch it
     *  from the shell. The second argument is a function callback.This callback will be later called
     *  by the exec function once the command terminates or an error occurs. You should expect three
     *  argument in this callback:error, stdout, and stderr
     */
    exec('cat *.js', function(err, stdout, stderr){
        // the command exited or the launching failed
        if (err) {
            // we had an error launching the process
            console.log('child process exited with error code', err.code);
            return;
        }
        console.log(stdout);
    })

// You can also pass an optional argument containing some configuration options before the callback
// function, like this

    var options = {
        timeout: 10000,
        encoding: 'utf8',
        cwd: '../07-file-operator',
        env: null // 父进程传给子进程的环境变量
    };
    exec('cat *.js', options, function(err, stdout, stderr){
        console.log("stdout", stdout);
    })
}

if (0) {
    /**
     * you may want to provide the child process with a set of environment var that is an
     * extension of the parent ones, if you change the process.env object directly, you will
     * change it for every module of your node process, which is undesirable. Instead, create a new
     * object that is the augument copy fo process.env
     * 即：使用环境变量前，先创建他的一个副本
     */
    var env = process.env,
        varName,
        envCopy = {};
    for(varName in env) {
        envCopy[varName] = env[varName];
    }

// Assign some custom variables
    envCopy['v1'] = 'some1';
    envCopy['v2'] = 'some2';

// execute some command with process env and my custom var
    exec('ls -al', {env: envCopy}, function(err, stdout, stderr){
        if (err) {
            throw err;
        }
        console.log("stdout", stdout);
        console.log("stderr", stderr);
    });
}