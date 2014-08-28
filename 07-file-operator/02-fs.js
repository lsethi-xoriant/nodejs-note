/**
 * Created by tsq on 14-8-28.
 */
var fs = require("fs");
/**
 * stat:获得meta-information
 * Sometimes you may need to known some characteristics of a file like its size, creation time
 * or permissions.You can query some meta-info on a file(or dir) by using the fs.stat function.
 */

if (0) {

    fs.stat('/etc/passwd', function(err, stats){
        if (err) {
            throw err;
        }
        // status也会自带一些方法
        console.log("typeof stats", typeof stats);
        console.log(stats);
        console.log(stats.isFile());            // true; 是否是文件
        console.log(stats.isDirectory());       // false; 是否是目录
        console.log(stats.isBlockDevice());     // false; if the file is a device of the type block; in most unix sys this is generally under the /dev dir
        console.log(stats.isCharacterDevice()); // false; if the file is a device of the character type.
        console.log(stats.isSymbolicLink());    // false; if the file is a symbolic link to another file
        console.log(stats.isFIFO());            // false; if the file is a FIFO(a special kind of unix named pipe)
        console.log(stats.isSocket());          // false; if the file is unix domain socket

    });
    /**
     *   console.log(stats)的结果
     {
          dev: 16777218,
          mode: 33188,
          nlink: 1,
          uid: 0,
          gid: 0,
          rdev: 0,
          blksize: 4096,
          ino: 19679,
          size: 5253,
          blocks: 0,
          atime: Thu Aug 28 2014 08:23:12 GMT+0800 (CST),
          mtime: Tue Feb 18 2014 13:42:34 GMT+0800 (CST),
          ctime: Tue Feb 18 2014 13:42:34 GMT+0800 (CST)
      }
     */
}


if (0) {

    /**
     * open: 打开一个文件
     * Before you can read or manipulate file, you have to open them using the fs.open function.
     * Then, a callback function you provide is invoked with the file descriptor, which you can
     * later use to read or write to the opened file
     */

    /**
     *  参数一： 文件路径
     *  参数二：contains the flags, which indicate the mode with which the file should open
     *         this flag can be:
     *         |-- r:  Opens the text file for reading.The stream is positioned at the beginning of the file
     *         |-- r+: Opens the file for reading and writing.The stream is positioned at the beginning of the file
     *         |-- w:  Truncates the file to zero length or creates a text file for writing.The stream is positioned at the beginning of the file
     *         |-- w+  Opens the file for writing.The file is created if it does not exist. Otherwise it is truncated. The
     *                 stream is positioned at the beginning of the file
     *         |-- a:  Opens the file for writing.The file is created if it does not exist.The stream is positioned
     *                 at the end of the file.Subsequent writes to the file will always end up at the current end of file
     *         |-- a+: Opens the file for reading and writing. The file is created if it does not exist. The stream is positioned at the end of the file.
     *                 Subsequent writes to the file will always end up at the current end of file.
     */
    fs.open('/Users/tsq/test', 'r', function(err, fd){
        // got fd file descriptor
        console.log("fd", fd); // 11
    });
}



if (0) {
    /**
     * Once a file is open, you can read a part of it, but before you do so, you have to create
     * a buffer that will contain the data. That buffer will be passed to the fs.read function to be filled
     * with the file data
     *
     */
    fs.open('/Users/tsq/test.js', 'r', function(err, fd){
        if (err) {
            throw err;
        }
        var readBuffer = new Buffer(1024 * 1024),
            bufferOffset = 0,
            bufferLength = readBuffer.length,
            filePosition = 0; // 代表从文件的什么地方开始读

        /**
         * Note: buffer的使用
         * Once you pass the buffer to fs.open(), that buffer becomes under the control of the `read` command.
         * The control of the buffer will return to you once your cb is invoked. Don't read, write, or use that
         * buffer in another call before that ; otherwise, you may read incomplete data, or worse, you may write
         * concurrently into the same buffer
         * ps: 第一次这一段一点都没看懂，后来看了下面的内容，过了一会儿再来看这段内容，竟然一目了然了！
         */
        fs.read(fd, readBuffer, bufferOffset, bufferLength, filePosition, function read(err, readBytes) {
            if (err) {
                throw err;
            }
            console.log('just read ' + readBytes + ' bytes');
            if (readBytes > 0) {
                console.log(readBuffer.slice(0, readBytes)); // readBytes代表共读了多少个字节
            }
            console.log(readBuffer.toString()); // 将buffer转换成utf-8的字符串
        })
    });
}


if (0) {
    /**
     * write to a file
     *
     */
    fs.open('/Users/tsq/test.js', 'a', function(err, fd){
        if (err) {
            throw err;
        }
        var writeBuffer = new Buffer('writing this string'),
            bufferPosition = 0,
            bufferLength = writeBuffer.length,
            filePosition = null;   // the position is null, which indicates that the write will happen
                                   // at the current file cursor.Because you are opening the file in append mde
                                   // the file cursor is positioned at the end of the file

        /**
         * writeBuffer: The data you want written to the buffer
         * bufferPosition: The position inside the buffer where the data should start
         * bufferLength: The length of the data you want to write
         * filePosition: The file positin you want to start writing from
         * cb: A cb function called wrote that will be invoked once the operation ends
         */


        /**
         * Again, as in the read operation, you should not use the buffer you provide a after the fs.write
         * operation has been commanded.Once you pass it in, the buffer is in control of that operation, and
         * you should only reuse it after your callback has been invoked
         * 也就是说这个writeBuffer只能在回调函数中使用，不能继续在下面继续使用。
         */
        fs.write(fd, writeBuffer, bufferPosition, bufferLength, filePosition, function(err, written){
            if (err) {
                throw err;
            }
            console.log('wrote ' + written + ' bytes'); // written 代表的是字节数
        });
    })
}

if (1) {
    /**
     * close a file
     * In real applications, however, once you open a file, you will eventually need to close it. For that
     * you just keep track of all the open file descriptor and eventually close them using fs.close(fd[,cb])
     * when you no longer need them. It's quite easy to leak file descriptor if you're not careful.
     */
    function openAndwriteToSystemLog(writeBuffer, callback) {
        fs.open('/Users/tsq/test.js', 'a', function(err, fd){
            if (err) {
                return callback(err);
            }
            function notifyError(err) {
                fs.close(fd, function(){
                    callback(err);
                });
            }
            var bufferOffset = 0,
                bufferLenght = writeBuffer.length,
                filePosition = null;
            fs.write(fd, writeBuffer, bufferOffset, bufferLenght, filePosition, function(err, written){
                if (err) {
                    return notifyError(err); // 这里使用return的作用是不会让程序继续往下执行，即不会执行fs.close...., 另外又调用了notifyError函数一次
                }
                fs.close(fd, function(){
                    callback(err);
                });
            });
        });
    }
    openAndwriteToSystemLog(new Buffer('hi close it'), function(err){
        if (err) {
            console.log('error:', err.message);
            return;
        }
        console.log('all done with no error');
    });
}