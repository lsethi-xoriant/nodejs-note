var xml2js = require("xml2js");
var parseString = xml2js.parseString;

var xml = '<root>Hello</root>'

parseString(xml, function (err, result) {
    console.log(result);
});