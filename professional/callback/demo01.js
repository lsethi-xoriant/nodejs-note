/**
 * Created by tommytang on 3/10/15.
 */
/**
 We can pass functions around like variables and return them in functions and use them in other
 functions. When we pass a callback function as an argument to another function,we are only passing
 the function definition. We are not executing the function in the parameter.

 And since the containing function has the callback function in its parameter as a function definition,
 it can execute the callback anytime.

 Note that the callback function is not executed immediately. It is 'called back' at some specified point
  inside the containing function's body.

 Callback Functions Are Closures
 When we pass a callback function as an argument to another function, the callback is executed at some
 point inside the containing function's body just as if the callback were defined in the containing
 function.This means the callback is a closure, closures have access to the containing function's
 scope, so the callback function can access the containing function's variables,and even the
 variables from the global scope.
 */


// Make sure callback is a Function Before Executing It
// It is always wise to check that the callback function passed in the parameter is indeed a function
// before calling it. Also, it is good practice to make the callback function optional

function getInput(options, callback) {
    if (typeof callback === 'function') {
        // Call it, since we have confirmed it is callable
        callback(options);
    }
}