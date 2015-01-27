// the last argument of a command can be variadic, and only the last argument. To make an argument variadic you have to append
// ... to the argument name. 三个点不能少

var program = require("commander");

program
  .version('0.0.1')
  .command('rmdir <dir> [otherDirs...]')
  .action(function (dir, otherDirs) {
      console.log('rmdir %s', dir);
      if (otherDirs) {
          otherDirs.forEach(function (oDir) {
              console.log('rmdir %s', oDir);
          });
      }
  });
program.parse(process.argv);