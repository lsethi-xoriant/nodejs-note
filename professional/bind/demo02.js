/**
 * Created by tommytang on 3/10/15.
 */

/**
 Bind allows us to curry a Function

 Function Currying, also known as partial function application, is the use of a function
 (that accept one or more argument) that returns a new function with some of the argument
 already set.The function that is returned has access to the stored arguments and variables
 of the outer function.
 */

function greet(gender, age, name) {
    var salutation = gender === 'male' ? 'mr': 'ms';
    if (age > 25) {
        return 'hello, ' + salutation + name + '.';
    } else {
        return 'Hey. ' + name + '.';
    }
}

// so we are passing null because we are not using the 'this' keyword in our greet function
var greetAnAdultMale = greet.bind(null, 'male', 45);
console.log(greetAnAdultMale('John Hartlove'));

/**
  So, with the bind() method, we can
    |-- explicitly set the this value for invoking methods on objects
    |-- we can borrow and copy methods
    |-- assign methods to variable to be executed as functions
 */
