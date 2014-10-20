/**
 * Created by tsq on 14-10-20.
 */
var fs = require("fs");
var rs = fs.createReadStream('./01-using-a-readable-stream.js');

/**
 * You can pass a second argument with options to `fs.createReadStream()`, where you can specify the
 * start and end position on your file, the encoding, the flags, and the buffer size. Here are the `option`
 * arguments:
 * |--  encoding:
 *      The encoding of the strings emitted in 'data' events, or `null` if you want raw buffers.
 * |-- fd:
 *      If you already have an open file descriptor, you can pass it in here and the stream will assume
 *      it.Defaults to `null`.
 * |-- bufferSize
 *      The size in bytes of the buffer of each chunk of the file to be read. Defaults to 64KB.
 * |-- start
 *      The file position of the first byte to be read. Used to read a range of the file instead of the
 *      whole file.
 * |-- end
 *      The file position of the last byte to be read. Used to read a range of the file instead of the
 *      whole file.
 */

// note: if you already have an open file, you can create a readable stream from it using the fd option:
if (0) {
    var fs = require("fs");
    var path = './01-using-a-readable-stream.js';
    fs.open(path, 'r', function(err, fd){
        console.log("fd", fd);
       fs.createReadStream(null, {fd:fd, encoding:'utf8'});
        fs.on('data', console.log);
    });
}

/**
 * You can also create a file writable stream:
 * var fs = require("fs");
 * var rs = fs.createWriteStream(path, options);
 *
 * fs.createWriteStream() also accepts a second argument with an `option` object that has these
 * default values:
 * {
 *  flags: 'w', // 和fs.open()中的flag一样。
 *  encoding: null,
 *  mode: 0666 // 指定权限模式
 * }
 *
 */
var fs = require("fs");
var rs = fs.createWriteStream('', {encoding: 'utf8'});