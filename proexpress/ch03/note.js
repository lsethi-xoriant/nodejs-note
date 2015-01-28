/**
 * 1. set ,get
 * The method app.set(name, value) accepts two parameters: name and value. As you might guess, it sets the value for the name.
 * For example, we often want to store the value of the port on which we plan to start our server:
 *
 * app.set('port', 3000);
 * or
 * app.set('port', process.env.PORT ||3000);
 *
 * The app.set()method also exposes variables to templates application-wide; for example,
 *
 * app.set('appName', 'HackHall')
 * will be available in all templates, meaning this example would be valid in a Jade template layout:
 *
 * doctype 5
 * html
 *  head
 *    title=appName
 *  body
 *    block content
 *
 *
 *
 *2. enable, disable
 *
 *  ```
 *  app.disable('etag)
 *  ```
 *
 *3. enabled(), disabled()
 *
 *  ````
 *  app.disable('etag');
 *  console.log(app.disabled('etag'); // true
 *  ```
 *4. settings
 *  |-- env
 *      This variable is used to store the current environmnt mode for this particular nodejs process. The value is
 *      automatically set by express from process.env_NODE_ENV.if that is not set, to the `development` value
 *
 *      knowing in what mode the application runs is very important because logic related to error handling, complication
 *      of style sheets, and rendering of the templates can differ dramatically.
 *  |-- cache
 *      This flag, if set to false, allows for painless developement because templates are read each time the server
 *      requests them. On the other hand, if view cache is set to true, it facilitaties template to compilation caching,
 *      which is a desired behavior in production. If the env setting is production, the view cache is enabled by default.
 *      Other it is set to false
 *
 *  |-- view engine
 *      The `view engine` setting holds the template file extension(e.g, 'ext' or 'jade') to utilize if the file extension
 *      is not passed to the res.render() function inside of the request handler, res.render()函数中不用带文件扩展名了。如
 *      res.render('index', {title: 'express'});
 *  |-- views
 *      the views setting has an absolute path(starts with /on Mac and Unix) to a directory with templates. This setting
 *      defaults to the absolute path of the views folder in the project's root(where the main application file.e.g, app.js)
 *
 *      As mentioned in the 'mvc structure and moduels' changing the template folder name is trivial.Typically, when we set
 *      the custom value for views in app.js, we use `path.join()` and the `__dirname` global templates use this configuration statement
 *
 *      ```
 *      app.set('views', path.join(__dirname, 'template'))
 *      ```
 *
 *  |-- trust proxy
 *      Set trust proxy to true if your nodejs.js app is working behind reverse proxy(反向代理) such as Varnish or Nginx.
 *      This will permit trusting in the `X-Forwarded-*` headers, such as X-Forwarded-Proto(req.protocol) or `X-Forwarder-For(req.ips)`
 *      The trust proxy setting is disabled by default.
 *      If you want to turn it on (when you have a proxy server) you can use one of these statements:
 *
 *      ```
 *      app.set('trust proxy', true);
 *      app.enable('trust proxy');
 *      ```
 *
 *
 *  |-- jsonp callback name
 *      If you're building an application(a rest api server) that serves requests coming from front-end clients hosted on
 *      different domains, you might encounter cross-domain limitations when making `XHR/AJAX` calls. In order words, browser
 *      requests are limited to the same domain(and port). The workaround is to use cross-origin resource sharing (cors) headers
 *      on the server
 *
 *      If you don't want to apply cors headers to your server, then the js object literal notation with prefix(JSONP) is the
 *      way to go. Express.js has a res.jsonp() method that makes using JSONP a breeze
 *
 *      for the requests with a query string param `?cb=update`, we can use
 *      ```
 *      app.set('jsonp callback name', 'cb');
 *      // 在使用res.jsonp时就会把值包装成jsonp，如果没有写成cb,那么不会包装，原样输出
 *      ```
 *  |-- json replacer and json spaces
 *      when we use the express.js method res.json(), we can apply special parameters: replacer and spaces. These parameters
 *      are passed to all JSON.stringify() functions in the scope of the application
 *  |-- case sensitive routing
 *      The `case sensitive` routing flag should be self-explanatory. We disregard the case of the url paths when it is false
 *      which is the default value, and do otherwise when the value is set to true.For example, if we have
 *      `app.enable('case sensitive routing')` when /users and /Users won't be the same. It's best to have this option disabled
 *      for the sake of avoiding confusion
 */