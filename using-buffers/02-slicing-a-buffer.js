/**
 * Created by tsq on 14-8-23.
 */

var buffer = new Buffer('this is the content of my buffer');
var smallerBuffer = buffer.slice(8, 19); // 返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。
console.log(smallerBuffer.toString()); // 将buffer通过toString方法转换成字符串,而不能直接打印buffer
/**
 *  注意: 当我们slice一个buffer时，没有新的内存被分配也没有东西被复制。这个新的buffer使用父buffer的内存
 *  仅仅是引用不同的 start end 位置。这会产生一些问题。
 *      |-- 改变父buffer的内容会影响子buffer的内容
 *      |-- 对内存的回收会产生影响
 *
 */