/**
*
when the http server response comes back, the response event is fired, triggering all the registered
callback for this event, and passing along the response object. This object is an instance of http.ClientResponse
you can immediately inspect some attributes of this object:
|-- response.statusCode
|-- response.httpVersion
	1.1or 1.0
|-- response.headers
	a plain object containing the headers' name-value pairs. The names are lowercase.
*/

// the response body is not present when the request response event is fired. if you are
// interested in the response body, you have to register for 'data' events on the response like this:

http.request(options, function(response){
	response.setEncoding('utf8');
	response.on('data', function(data) {
		console.log('i have a piece of the body here', data);
	});
});
// here you are registering for the 'data' event on the res as soon as you get the res event.
// the data can be a buffer or , if your specify an encoding on the res object, it will be an encoded string.
