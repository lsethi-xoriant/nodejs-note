/**
 *
 * Created by tsq on 14-10-21.
 */


/**
 * req.
 *  |-- url
 *      this property contains the requested url as a string. It does not contain the schema, hostname, or port,
 *      but it contains everything after that.
 *  |-- method
 *      get, post, delete, head...
 *  |-- headers
 *
 *
 *
 */
var util = require("util");
require("http").createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    var object = {
        url: req.url,
        method: req.method,
        headers: util.inspect(req.headers),
        headers2: req.headers
    };
    console.log(object);
    res.end(JSON.stringify(object));
}).listen(4000);
