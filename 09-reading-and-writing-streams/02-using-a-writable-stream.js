/**
 * Created by tsq on 14-10-20.
 */

/**
 * flush() 是把缓冲区的数据强行输出，主要用在IO中，即清空缓冲区数据，一般在读写流的时候，数据是先被读到内存中，再把数据
 * 写到文件中，当你数据读完的时候不代表你的数据已经写完了，因为还有一部分可能会留在内存这个缓冲区中。所以应该在关闭读写流
 * 之前先flush().
 */

/**
 * A writable stream is an abstraction of something you can send data to. It can be a file or a
 * TCP network connection or even an object that ouputs transformed data, such as a zipped file.
 * A writable stream is an object that allows you to write data to it.
 */



/**
 * You can wirte to a writable stream by passing it a buffer or a string like this:
 */
var writeStream;
writeStream.write('this is an utf-8 string');

/**
 * If you are passing in a string as the first argument, you can specify the string encoding
 * by passing it in the second argument. Otherwise, the stream assumes the string is UTF8-encoded.
 */
// here is an example of passing in an alternative encoding:
var writeStream;
writeStream.write('7e3e4acde5ad240a8ef5e731e644fbd1', 'base64');

// you can simply pass in a buffer to write:
var writeStream;
var buffer = new Buffer('this is a buffer with some string');
writeStream.write(buffer);

/**
 * Once you write to a stream, Node can immediately flush the data to the kernel buffer(内核缓存区) or,
 * if that's not possible at the time, Node will store it in a queue in memory. You can determine which
 * event occurred by observing the return value of the call to `writeStream.write()`. The write command
 * returns a boolean value that is `true` when the buffer was flushed and `false` when the buffer was queued
 */

/**
 * Waiting for a Stream to Drain
 * As you've seen, on `write` commands you know if the buffer was immediately flushed. If was not flushed,
 * it's stored in your process memory.
 *
 * Later, when the stream manages to flush all the pending buffers, it emits a drain event that you can listen to:
 */
var writable;
writable.on('drain', function(){
    console.log('drain emitted');
});





























