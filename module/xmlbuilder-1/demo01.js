var builder = require("xmlbuilder");
var xml = builder.create('root')
    .ele('xmlbuilder', {'for': 'node-js'})
    .ele('repo', {'type': 'git'}, 'git://github.com/demo.git')
    .end({pretty: true});
console.log(xml);

