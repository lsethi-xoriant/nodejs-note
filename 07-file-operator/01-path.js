/**
 * Created by tsq on 14-8-27.
 */

var path = require("path");

/**
 * normalize:
 * normalize用于将path正常化，例如会将 '//'变成'/', 会将'..'看成是上级目录, '.'会看成当前目录
 * Normalizing paths before you store or use them is often a good idea.For example, file
 * paths that were input by users or are present in a configuration file, as well as paths
 * that are the result of joining two or more paths, usually need to be normalized. To do so,
 * you can use the 'normalize' function present in the path module to normalize a path string,
 * thus taking care of .., ., and //.For instance
 */
console.log(path.normalize('/foo/..')); //           /
console.log(path.normalize('/foo/boo/..'));//        /foo
console.log(path.normalize('/foo/boo/.'));//         /foo/boo
console.log(path.normalize('/foo/boo//coo/.'));//    /foo/boo/coo
console.log(path.normalize('/foo/boo/doo/'));//      /foo/boo/doo/

/**
 * join:
 * 用于将多个参数链接成一个path
 * By using path.join(), you can concatenate(链接) path strings. You can concatenate as many as
 * you like, passing all of them as consecutive(通过) arguments like so:
 *
 */
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux'));         // /foo/bar/baz/asdf/quux
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));   // /foo/bar/baz/asdf

/**
 * resolve:
 * 正如书中所说将像cd命令一样,用于产生绝对路径
 * You can resolve a series of paths into a normalized absolute path by using path.resolve().
 * It works like an iterative cd command for every argument, except that it also works on files
 * an it's abstract--it does not tap into the underlying filesystem to try to see if the path exists;
 * it simply manipulates paths.也就是说它只是生成字符串，并依据给的参数去判断路径是否真的存在。
 */
console.log(path.resolve('/foo/bar', './baz'));         // /foo/bar/baz; 在/foo/bar基础上进入当前目录下的baz目录
console.log(path.resolve('/foo/bar', '/tmp/file'));     // /tmp/file; 在/foo/bar基础上 切换至/tmp/file目录

// If the resulting path is not absolute, path.resolve will prepend the current working directory to the
// path, as in this example.也就是说，若结果不是绝对路径，会在前面加上当前的工作目录
console.log(path.resolve('www', 'staic/png', '../gif/image.gif')); ///Users/tsq/my/nodejs-note/07-file-operator/www/staic/gif/image.gif

/**
 *relative:
 * 获得相对路径
 * By using path.relative,you can also determine how to get from one absolute path to another
 * absolute path. For example
 *
 */
console.log(path.relative('/data/aa/test/aaa', '/data/aa/impl/bbb')); // ../../impl/bbb; 获得如何从第一个参数的目录进入第二参数目录的相对路径


/**
 * dirname: 获得目录名
 * basename: 获得文件名及扩展名
 * extname: 获得文件扩展名
 */
console.log(path.dirname('/foo/bar/baz/quux.txt'));         // /foo/bar/baz
console.log(path.basename('/foo/bar/baz/quux.txt'));        // quux.txt

console.log(path.extname('/a/b/index.html'));               // .html
console.log(path.extname('/a/b/index'));                    // 空
console.log(path.extname('/a/b/.'));                        // 空
console.log(path.extname('/a/b/d.'));                       // .

// You can subtract(减去) file extensive from the result by passing in an optional second 
// argument with the expected extension, like this
console.log(path.basename('/foo/bar/quu.html', '.html'));   // quu

/**
 * exists: 判断路径中的文件是否存在
 * existsSync: 同步版
 */
path.exists('/etc/passwd', function(exists){
    console.log("1:", exists); // true
});
path.exists('/does_not_exit', function(exists){
    console.log("2:", exists); // false
});

console.log("3:", path.existsSync('/etc/passwd')); // true
