// It is also possible to convert objects into nodes
var builder = require("xmlbuilder");
var xml = builder.create({
    root: {
        xmlbuilder: {
            '@for': 'node-js',
            repo: {
                '@type': 'git',
                '#text': 'git://github.com/demo.git'
            }
        }
    }
}).end({pretty: true});
console.log("xml\n", xml);

