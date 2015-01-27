/**
 * Created by tommytang on 1/27/15.
 */

// if you want to display help by default(e.g if no command was provided), you can use something like
var program = require("commander");
program
.version('0.0.1')
.command('getstream [url]', 'get stream url')
.parse(process.argv)
if (!process.argv.slice(2).length) {
    program.outputHelp();
//    program.outputHelp();
}