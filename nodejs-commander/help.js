/**
 * Created by tommytang on 1/27/15.
 */
var program = require("commander");

program
.version('0.0.1')
.option('-f, --foo', 'enable some foo')
.option('-b, --bar', 'enable some bar')
.option('-B, --baz', 'enable some baz')

// must be before .parse() since node's emit() is immediate
program.on('--help', function () {
    console.log('   Example:');
    console.log('');
    console.log('   $ custom-help --help');
    console.log('   $ custom-help --h');
    console.log('');
});
program.parse(process.argv);
console.log('stuff');
