/**
 * Created by tsq on 14-8-23.
 */

/**
 *  copy一部分buffer到另一个buffer通过使用copy
 *
 */

var buffer1 = new Buffer('this is the content of my buffer')
var buffer2 = new Buffer(11);

var targetStart = 0;
var sourceStart = 8;
var sourceEnd = 19;
buffer1.copy(buffer2, targetStart, sourceStart, sourceEnd); // copy方法避免了共享同一块内存
console.log(buffer2.toString());//the content