/**
 * Created by tsq on 14-10-21.
 */

require("http").createServer(function(req, res){
    res.setHeader("mama", "ok")
    res.writeHead(200, {
        'Content-Type':'text/plain',
        'Cache-Control':'max-age=3600'
    });
    res.end('hello world');
}).listen(4000);

/**
 * Changing or setting a header
 * you can change a header you already set or set a new one by using the following
 *
 * res.setHeader(name, value);
 *
 * This works only if you haven‘t already sent a piece of the body by using `res.write()` or
 * `res.end()`. This also fails to work if you have already used `res.writeHead()` on that
 * response object, because the headers also will have already been sent.
 */


/**
 * Removing a Header
 * You can remove a header you have already set by calling `res.removeHeader` and providing the
 * header name:
 *
 *  res.removeHeader('Cache-Control');
 */

/**
 *Writing a piece of the response body
 * an http server sends the response body after sending the res headers. Two ways to do this are
 * to write a string.
 *
 * res.write('hello');
 *
 * or use an existing buffer
 *
 * var buffer = new Buffer('hello world');
 * res.write(buffer);
 */
