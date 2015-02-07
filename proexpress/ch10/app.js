var express = require("express");
var app = express();
//app.get('/stories', require("./routes").stories.findStories);
console.log("__dirname\n", __dirname);

/**
 However, the parameter are different, so we cannot abstract both statements into one function. we can
 implement a function that returns a function instead
 */
var requiredParam = function (param) {
    // Do something with the param
    // create a private attrivute parmaName based on the value of param variable

    var paramName = '';
    if (param === '_token') {
        paramName = 'token';
    } else if (param === 'api_key') {
        paramName = 'API Key'
    }
    return function (req, res, next) {
        // User paramName, e.g ..
        if (!req.query[param]) {
            return next(new Error('No ' + paramName + ' was provided'));
        }
        next();
    }
};

app.get('/admin', requiredParam('_token'), function (req, res, next) {
    res.render('amdin');
});

app.use('/api/*', requiredParam('api_key'));