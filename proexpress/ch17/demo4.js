var domain = require("domain").create();

domain.on('error', function (error) {
    console.log('Custom Error:' + error);
});

domain.run(function () {
    setTimeout(function () {
        throw new Error('Failed!');
    }, 100);
});

