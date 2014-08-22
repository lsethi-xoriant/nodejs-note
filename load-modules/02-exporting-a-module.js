/**
 * Created by tsq on 14-8-22.
 */

/**
 * |-- 在node中files和modules是一一对应的 
 * |-- module:是一个变量，代表这个目前所在的模块
 * |-- module.exports: 存放这被导出的对象
 */
function Circle(x, y, r) { 
    function r_squared() { 
        return Math.pow(r, 2);
    }
    function area() { 
        return Math.PI * r_squared();
    }
    return {
        area: area
    };
}
console.log("module.exports", module.exports);
module.exports = Circle; // 没有exports对象中填充,而是将exports的类型由object换成了function;紧紧暴露一个Circle构造函数
console.log("module", module.exports);




