/**
 * Created by tsq on 14-8-22.
 */

/**
 * |-- module.exports: 初始化时是一个空对象,之后就可以往他身上填充属性了
 */

function printA() {
    console.log('A');
}

function printB() {
    console.log('B');
}

function printC() {
    console.log('C');
}
console.log("module", module);
console.log("module.exports", module.exports);

module.exports.printA = printA; // 往空对象中填充属性
module.exports.printB = printB;
module.exports.pi = Math.PI;    // 最终导出的是一个对象，有三个属性，两个是函数，一个是pi

console.log("module.exports", module.exports);

