/**
 * Created by tsq on 14-9-4.
 */

var spawn = require("child_process").spawn;

// spawn the child with a node process executing 
var child = spawn('node', ['05-send-data-server.js']);

// call this function every 1s

setInterval(function(){
    // create a random number smaller than 10.000
    var number = Math.floor(Math.random() * 10000);
    // send the number to the child process:
    child.stdin.write(number + '\n');
    
    // get the response from the child process and print it
    // because you wan to listen for data back from the child only once per number
    // so you will use child.stdout.once and not child.stdout.on
    child.stdout.once('data', function(data){
        console.log('child replied to ' + number + ' with:' + data);
    })
}, 1000);
child.stderr.on('data', function(data){
    process.stdout.write(data);
})