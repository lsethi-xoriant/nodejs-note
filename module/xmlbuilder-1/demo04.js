// It is also possible to convert objects into nodes
var builder = require("xmlbuilder");
var toUser = 'tsq';
var fromUser = 'qst';
var text = 'hello';
var content = 'this is a text';
var msgType = 'text';
var xml = builder.create('xml')
  .ele('ToUserName')
  .dat(toUser)
  .up()
  .ele('FromUserName')
  .dat(fromUser)
  .up()
  .ele('CreateTime')
  .txt(Date.now())
  .up()
  .ele('MsgType')
  .dat(msgType)
  .up()
  .ele('Content')
  .dat(content)
  .up()
  .ele('MsgId')
  .dat('333333333')
  .end({pretty: true})
console.log("xml\n", xml);

