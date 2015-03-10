/**
 A bit about 'Context' before we continue:
 We can have an object that is current context and switch the context to another object by invoking
 the function with another object
 */

var person = {
    firstName: 'Penelope',
    lastName: 'Barrymore',
    showFullName: function () {
        console.log(this.firstName + ' ' + this.lastName);
    }
};

person.showFullName();

// If we invoke showFullName with a different object
var anotherPerson = {
    firstName: 'Rohit',
    lastName: 'Khan'
};

// we can use the apply method to set the 'this' value explicity--more on the apply() method later
// 'this' gets the value of whichever object invokes the 'this' function, hence:
person.showFullName.apply(anotherPerson);
// So the context is now anotherPerson because anotherPerson invoked the person.showFullName() method
// by virtue of using the apply() method
