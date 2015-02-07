var express = require("express");
var app = express();
var cookieParser = require("cookie-parser");
var session = require("express-session");
var RedisStore = require("connect-redis")(session);
app.use(cookieParser());
app.use(session({
    resave: true,
    saveUninitialized: true,
    store: new RedisStore({
        host: 'localhost',
        port: 6379
    }),
    secret: '497DDBEF-0A93-4F80-B286-7B2E1404546A',
    cookie: {path: '/', maxAge: 3600000}
}));
/*app.use(function (req, res, next) {
    if (req.session && req.session.authenticated) {
        return next();
    } else {
        return res.redirect('/login');
    }
});*/
app.get('/', function (req, res) {
    console.log('session id: ', req.sessionID);
    if (req.session.counter) {
        req.session.counter = req.session.counter + 1;
    } else {
        req.session.counter = 1;
    }
    res.send('counter:' + req.session.counter);
});
app.listen(3000, function () {
    console.log('server listen on:', 3000);
});