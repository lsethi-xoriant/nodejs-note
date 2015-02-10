var express = require("express");
var path = require("path");
var logger = require("morgan");
var favicon = require("serve-favicon");
var errorhandler = require("errorhandler");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");

var csrf = require("csurf");
var helmet = require("helmet");
var validator = require("express-validator");

var app = express();

app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3000);
app.use(logger('combined'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static('public'));
app.use(cookieParser('364BBBD6-0E48-465A-B48C-426A1827A856'));
app.use(session({
    secret: 'F7D57197-94D3-47A9-AFBA-BB339CC967AC',
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(validator());
app.use(csrf());

app.use(function (req, res, next) {
    console.log("token\n", req.csrfToken());
    res.locals.csrftoken = req.csrfToken();
    next();
});

app.use(helmet());

app.get('/', function (req, res) {
    res.render('index');
});

app.post('/login', function (req, res) {
    console.log("**********************");
    req.assert('password', 'password is required').notEmpty();
    req.assert('email', 'A valid email is required').notEmpty().isEmail();
    var errors = req.validationErrors();
    console.log("errors\n", errors);
    console.log("request.email\n", req.email);
    if (errors) {
        res.render('index', {errors: errors});
    } else {
        res.render('login', {email: req.email});
    }
});
app.listen(app.get('port'), function () {
    console.log('server listening on port:', app.get('port'));
});

