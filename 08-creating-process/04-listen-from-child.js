/**
 * Created by tsq on 14-9-2.
 */


/**
 * Any child process handler has a property named stdout that represent the child process standard output as a stream
 * You can then bind to the data event on that stream, which is the same as saying 'for every data chunk you get from the
 * the child output,invoke this callback, here is an example of that happening:
 */
var spawn = require("child_process").spawn;
// the spawn function call returns a childprocess object, which is a handle that encapsulates
// access to the real process,
var child = spawn('tail', ['-f', '/var/log/system.log']);
child.stdout.on('data', function(data) { console.log('tail output: ' + data);
});