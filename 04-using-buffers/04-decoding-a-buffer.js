
var buf = new Buffer('hello');
var str = buf.toString();// 一个buff可以转换成utf-8编码
console.log("str", str);
var b64Str = buf.toString('base64'); // 转化一个buffer到base64编码
console.log(b64Str);//aGVsbG8=
// 使用toString方法转换编码, utf-8字符串到base64
var utf8String = 'my string';
var buf = new Buffer(utf8String);
var base64String = buf.toString();