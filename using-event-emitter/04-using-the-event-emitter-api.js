/**
 * Created by tsq on 14-8-25.
 */

/**
 *  1.any object that implements the event emitter pattern implements a set of methods
 *      |-- addListener and on: to add an event listener to an event type
 *      |-- once: to attach an event listener to a given event type that will be called at most once
 *      |-- removeListener: to remove a specific event listner of a given event
 *      |-- removeAllListeners: to remove all event listeners of a given event type
 * 2.binding callback using addListener or on
 *      |-- by specifying an event type and a callback function
 *          function receiveData(data) {
 *              console.log(data);
 *          }
 *          readStream.addListener('data', receiveData)
 * 3.removing an event listener from an event emitter
 *      |-- unregister by specifying the event type and the callback function like this:
 *          function receiveData(data){
 *              console.log(data);
 *          }
 *          readStream.on('data', receiveData);
 *          readStream.removeListener('data', receiveData); //移除listerner时就要求我们不能使用匿名函数
 *
 * 4.removing all event listeners
 *      |-- emitter.removeAllListeners(type)
 *
 * 5.creating an event emitter
 *      |-- inheriting from node event emitter
 */
var util = require("util");
var EventEmitter = require("events").EventEmitter;

// here is the MyClass constructor;
var MyClass = function(){

}
util.inherits(MyClass, EventEmitter); //sets up the prototype chain so that you get the EventEmitter proto methods available to your MyClass instances.

MyClass.prototype.someMethod = function(){
    this.emit('custom event', 'a1', 'a2'); // this data will be passed along as arguments to the event listeners
};

var myInstance = new MyClass();
myInstance.on('custom event', function(s1, s2){ // client of myClass instance can listener to the event named custom event like this
   console.log(s1, s2);
});
myInstance.someMethod();



