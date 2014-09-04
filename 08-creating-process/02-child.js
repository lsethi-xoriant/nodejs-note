/**
 * Created by tsq on 14-9-2.
 */


var exec = require("child_process").exec;

var number = process.env.number;
console.log(typeof number);  //string
number = parseInt(number, 10);
console.log(typeof number); // number
/**
 * Here you can see that, in spite of the parent process passing a number into the name environment variable,
 * the child process receives it as a string
 *
 */