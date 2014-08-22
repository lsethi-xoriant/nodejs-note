/**
 * Created by tsq on 14-8-22.
 */
/**
 * |-- module在第一次被加载的时候会缓存下来，这意味着每次调用 require('myModule')都是返回相同的module

 */

console.log('module my_module initializing...');
module.exports = function(){
    console.log('Hi!');
};
console.log('my_module initialized');