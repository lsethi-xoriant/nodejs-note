// if you need to do some processing
var builder = require("xmlbuilder");
var root = builder.create('squares');
root.com('f(x) = x^2'); // 注释
for (var i = 0; i < 5; i++) {
    var item = root.ele('data');
    item.att('x', i);
    item.att('y', i * i);
}
var xml = root.end({pretty: true})
console.log("xml\n", xml);

/**
 <?xml version="1.0"?>
 <squares>
 <!-- f(x) = x^2 -->
 <data x="0" y="0"/>
 <data x="1" y="1"/>
 <data x="2" y="4"/>
 <data x="3" y="9"/>
 <data x="4" y="16"/>
 </squares>


 */