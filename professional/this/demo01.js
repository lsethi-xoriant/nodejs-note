/**
 * Created by tommytang on 3/9/15.
 */

// http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/
  
// Consider this example  
var person = {
    firstName: 'lope',
    lastName: 'more',
    showFullName: function () {
        console.log(this.firstName);
        // we could have also written this
        console.log(person.firstName);
    }
};
person.showFullName();

/**
 If we use person.firstName and person.lastName, as in the last example, our code becomes ambiguous(暧昧).
 Consider that there could be another global varible with the name 'person'.Then, references to person.firstName
 could attempt to access the firstName property from the person global variable, and this could lead to
 difficult-to-debug errors.So we use the 'this' keyword not only for aesthetics(美学), but also for precision(精确)
 its use actually makes our code more unambigous.

 The this keyword is similarly used to refer to an object that the function is bound to. The `this` keyword
 not only refers to the object but is also contains the value of the object
 */



/**
 Javascript's this keyword basics

 First know that all functions in JavaScript have properties, just as objects have properties. And when a
 function executes, it gets the `this` property--a variable with the `value of the object that invokes the function where this is used`

 The this reference `always` refers to an object: a singular object, and it is usually used inside a function or
 a method,although it can be used outside a function in the global scope.

 Note: when we use `strict mode`, this holds the value of undefined in global functions and in anonymous functions
 that are not bound to any object.

 `this` is used inside a function(let's say function A) and it contains the value of the object that invokes function A.
 We need this to access methods and properties of the object that invokes function A
 */


/**
 The biggest gotcha(疑难杂症) with js 'this' keyword

 this is not assigned a value until an object invokes the function where 'this' is defined.
 Let's call the function where 'this' is defined the 'this function'

 Even though it appears 'this' refers to the object where it is defined,it is not until an object
 invokes the 'this Function' that 'this' is actually assigned a value. And the value it is assigned is
 based 'exclusively'(仅仅) on the 'object' that invokes the 'this Function'. 'this' has the value of the
 invoking object in most circumstance. However, there are a few scenarios where this does not have the
 value of the invoking object.
 */