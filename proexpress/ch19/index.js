/**
 * Created by tommytang on 3/2/15.
 */
var express = require("express");
var superagent = require("superagent");
var consolidate = require("consolidate");
var app = express();

app.engine('html', consolidate.handlebars);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
var user = 'azat_co';
var story_slug = 'kazan';
var api_key = '';
var username = '';
var _token = '';

app.get('/', function (req, res) {
/*    superagent.get('https://api.storify.com/v1/stories/' + user + '/' + story_slug)
      .query({api_key: api_key,
          username: username,
          _token: _token})
      .set({Accept:'application/json'})
      .end(function (e, res) {
          if (e) return next(e);
          console.log(res.body.content);
      });*/
    var body = require("./body");
    return res.render('index', body.content);
});
app.listen(3001);
