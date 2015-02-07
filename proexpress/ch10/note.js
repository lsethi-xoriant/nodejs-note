/**
 Let's say we have a rest api with the following resources: stories, element, and users.
 We can separate request handlers into files accordingly, so that routes/stories.js has

 module.exports.findStories = function (req, res, next) {
    // ... Query to find stories from the database
 }

 module.exports.createStory = function(req, res, next) {
    // ... Query to create a story in th database
 }
 ...


 The routes/users.js file holds the logic for user entities
 module.exports.findUser = function(req, res, next){
    // ...
    };
     module.exports.updateUser = function(req, res, next){
    // ...
    };
     module.exports.removeUser = function(req, res, next){
    // ...
    };


 The main server file (app.js or server.js) can use the preceding modules in this manner
 // ...

 var stories = require("./routes/stories");
 var users = require("./routes/users");

 // ...
 app.get('/stories', stories.findStories);
 app.post('/stories', stories.createStories);

 a better way would be to write require(path.join('routes', 'stories'))

 */



