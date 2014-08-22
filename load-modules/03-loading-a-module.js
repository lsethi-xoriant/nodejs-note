/**
 * Created by tsq on 14-8-22.
 */
/**
 * |-- module的引用依赖于不同的module类型
 * |-- 共有3中类型
 *      |--  core module
 *      |-- third-party
 *      |-- local module
 * |-- 加载core module
 *      |-- core moudules被编译成2进制，他们被引用通过固定的名字而不是路径，更加优先被加载，即使
 *          在third-party中有同名的module
 *      |-- var http = require('http); // 返回在Node Api documentation中的http module
 * |-- 加载一个file module
 *      |-- 使用绝对路径: var module = require('/home/tsq/module/my_module');
 *      |-- 使用相对路径: var module = require('./my_module');
 *      |-- 可以省略(omit).js扩展名
 * |-- 加载一个文件夹module
 *      |-- var module = require('./myModuleDir');
 *      |-- 如果这样做，node将搜索这个文件夹，node会先认为这个文件夹是一个package，所以会尝试寻找
 *          package definition，而package definition应该是一个文件，被命名为 package.json
 *      |-- 若不包含package.json,会假设默认值是index.js
 *      |-- 若包含package.json,node会尝试转换这个文件并寻找main属性并使用他的值作为相对路径
 *          例如，若package.json写成这样
 *          {"main":"./lib/myModule.js"}
 *          则node将加载 ‘./myModuleDir/lib/myModule.js’
 * |-- 加载node_modules文件夹
 *      |-- 如果一个module名不是相对路径或者core module，node将尝试发现在当前目录中node_modules文件夹
 *          中的module,例如： var myModule = require('myModule.js')
 *          如果在当前目录下的node_module没有发现myModule.js，则会向父目录寻找: ../node_modules/myModule.js,
 *          一直到根目录
 *
 *
 */