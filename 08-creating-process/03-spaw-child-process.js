/**
 * Created by tsq on 14-9-2.
 */


var spawn = require("child_process").spawn;
// the spawn function call returns a childprocess object, which is a handle that encapsulates
// access to the real process,
var child = spawn('tail', ['-f', '~/test.js']);