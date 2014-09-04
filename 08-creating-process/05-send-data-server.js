/**
 * Created by tsq on 14-9-4.
 */

// unpause the stdin stream
process.stdin.resume();

process.stdin.on('data', function(data){

    // 这里千万不要乱用 console.log来打log
    var number;
    try {
        // parse the input data into a number
        number = parseInt(data.toString(), 10);
        // increment by one
        number += 1;
        // output the number
        process.stdout.write(number + '\n');
    } catch (err) {
        process.stderr.write(err.message + '\n');
    }
});