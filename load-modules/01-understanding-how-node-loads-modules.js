/**
 * Created by tsq on 14-8-22.
 */
/**
 *
 *
 *
 *
 */

/**
 * |-- node中，module被引用要么通过file path要么通过name
 * |-- 如果一个模块是通过name来引用的，那么最终它将匹配一个文件路径，除非它是core module
 * |-- node的core module暴露了一些核心的函数给程序员，在node程序启动的时候，他们被先被加载
 * |-- 为了使用其他module需要使用require函数
 *      |-- var module = require('module_name');
 *      |-- 这将导出一个core module或者被npm安装的一个module。
 *      |-- require函数返回了一个object,而这个object代表的是模块所暴露出来的api
 *      |-- 依赖于不同的module，返回的object可以是任何js值
 *          |-- 函数
 *          |-- object
 *          |-- array
 *          |-- 其他类型...
 *
 */