var express = require("express");
var path = require("path");
var logger = require("morgan");
var favicon = require("serve-favicon");
var errorhandler = require("errorhandler");

var app = express();
var router = express.Router();

app.set('view engine', 'jade');
app.set('port', process.env.PORT || port);
app.use(logger('combined'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static('public'));
var port = 3000;

var user = {
    'azat': {
        email: 'hi@azat.co',
        website: 'http://azat.co',
        blog: 'http://webapplog.com'
    }
};

var findUserByUsername = function (username, callback) {
    if (!user[username]) {
        return callback(new Error('No user matching ', username));
    }
    return callback(null, user[username]);
};

var findUserByUsernameMiddleware = function (request, response, next) {
    if (request.params.username) {
        console.log('Username param was detected:', request.params.username);
        findUserByUsername(request.params.username, function (error, user) {
            if (error) {
                return next(error);
            }
            request.user = user;
            return next();
        });
    } else {
        return next();
    }
};


/**
 *
    In addition, we can utilize the third parameter, next(), for control flow. It's closely related to the topic
 of error handling.
 */

var ping = function (req, res, next) {
    console.log('ping');
    return next();
};

var pong = function (req, res) {
    console.log('pong');
    res.end();
};
app.get('/', ping, pong);
var checkUserIsAdmin = function (req, res, next) {
    if (req.session && req.session._admin !== true) {
        return next(401);
    }
    return next();
};
var admin = {
    main: function (req, res, next) {
        res.render('admin')
    }
}
//app.get('/admin', checkUserIsAdmin, admin.main);

app.get('/v1/users/:username', function (request, response, next) {
    var username = request.params.username;
    findUserByUsername(username, function (error, user) {
        if (error) {
            return next(error);
        }
        return response.render('user', user);
    });
});

app.get('/v1/admin/:username', function (request, response, next) {
    var username = request.params.username;
    findUserByUsername(username, function (error, user) {
        if (error) {
            return next(error);
        }
        return response.render('admin', user);
    });
});

app.get('/v2/users/:username', findUserByUsernameMiddleware, function (request, response, next) {
    return response.render('admin', request.user);
});

/**
 *  Anytime the given string is present in the URL pattern of the route, and server receives a request that matches that
 *  route, the callback to the app.param() will be triggered.
 *
 *  The app.param() method is very similar to app.use() but it provides the value(username in our example) as the fourth,
 *  last parameter, to the function.
 */
app.param('v3Username', function (request, response, next, username) {
    console.log('Username param was is detected:', username);
    findUserByUsername(username, function (error, user) {
        if (error) {
            return next(error);
        }
        request.user = user;
        return next(); // 没有错误的话，next中应该返回空参数
    });
});

// No need for extra code in this route either, We get req.user for free because of the app.param() defined earlier:
app.get('/v3/admin/:v3Username', function (request, response, next) {
    return response.render('admin', request.user);
});

//app.all('*', userAuth);
//app.all('/api/*', apiAuth);
router.param('username', function (request, response, next, username) {
    console.log('Username param was is detected:', username);
    findUserByUsername(username, function (error, user) {
        if (error) {
            return next(error);
        }
        request.user = user;
        return next();
    });
});
router.get('/users/:username', function (request, response, next) {
    return response.render('user', request.user);
});
router.get('/admin/:username', function (request, response, next) {
    return response.render('admin', request.user);
});
app.use('/v4', router);
app.use(errorhandler());
app.listen(port, function () {
    console.log('listening on ', port);
});