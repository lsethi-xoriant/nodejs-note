/**
 * Created by tsq on 14-8-22.
 */
// 创建一个utf-8的编码buffer
var buf = new Buffer('hello world');
console.log("buf", buf);

// 创建的时候并指定encoding，在第二个参数上
var buf = new Buffer('8b75de', 'base64');
// 只接受三种编码: ascii, utf8, base64
// 没有初始化内容，但是有capacity
var buf = new Buffer(1024); // creating a 1024 byte buffer，需要注意的是，这种方式创建的buf里面内容并非为空
// 而是随机数
console.log("buf[4]", buf[4]);
console.log(typeof buf); // object
console.log(buf.length); // 1024, 这个对象有一个length属性

//使用iterate给buffer的内容赋值individual的字节值
var buf = new Buffer(100);
for (var v = 0; v < buf.length; v++) {
    buf[v] = v;
}
console.log("buf", buf);