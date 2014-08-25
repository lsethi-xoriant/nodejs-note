/**
 * Created by tsq on 14-8-25.
 */

/**
 * apply和call的真正作用是扩充函数运行的作用域
 *  |-- 每个函数都包含两个非继承而来的方法: apply()和call()
 *  |-- 他们的用途相同，都是在特定的作用域中调用函数
 *  |-- 接收参数方面不同，apply接收两个参数，一个是函数运行的作用域(this), 另一个是参数数组。
 *      call方法第一个参数与apply方法相同，但传递函数的参数必须列举出来
 *
 *
 */
var gloabObj = {
    firstName: 'diz',
    lastName: 'song'
};
var obj = {
    firstName: 'tsq',
    lastName:'qst'
};
function HelloName() {
    console.log(this.firstName + ' ' + this.lastName);
}

HelloName.apply(obj);

/*function temp1() {
    console.log(this);
    temp2();
}
function temp2(){
    console.log(this);
    
}
var Obj = {};
temp1.call(Obj);*/

HelloName.bind(obj)();