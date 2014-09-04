/**
 * Created by tsq on 14-9-2.
 */

var exec = require("child_process").exec;
/**
 * keep in mind that the environment variables are passed between process using the operating system,
 * and thus all the values arrive at the child process as strings.For instance, if the parent process
 * passes the number 123 as an environment variable, the child process will receive it as the string 123
 */
exec('node 02-child.js', {env:{number:123}}, function(err, stdout, stderr){ //父进程传的是node但是到子进程就变成string了
    if (err) {
        throw err;
    }
    console.log('stdout:\n', stdout);
    console.log('stderr:\n', stderr);
})