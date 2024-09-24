// !arrow function me this keyword kam nhi krta 

// ! har ek chiz object hai in javascript like string array everything

// !function bhi object ki tarah hi work kr sakta hai for example
function multiplyby4(num){
    return num * 4;
} 
multiplyby4.arvind = 6; //!function ka hi object bana liya 
console.log((multiplyby4(3)));
console.log(multiplyby4.arvind); //! print 6 so function has an insatace as arvind 
console.log(multiplyby4.prototype); //! empty ayega 


// !creating prototypes of a function like jaise array banake if tum print kroge chrome ke console me
// then waha prototype show hota hai ki kya kya method main array par use kr sakta hu isi type 
// we will create some functions using prototype 
function createUser(username , score){
    this.username = username;
    this.score = score;
}

createUser.prototype.incrementScore = function(){
    this.score++; //! wihtout this isko pata hi nhi chalega ki kiska score increment krna hai
    // ! so this --> jis ya jiska (yad rakhna)
}

createUser.prototype.printme = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai" , 50);
const cofee = new createUser("cofee" , 500);
console.log(chai.printme()); // show error so use new keyword to avoid error 

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of
the constructor function. This means that it has access to properties and methods
defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified 
arguments and this is bound to the newly created object. If no explicit return value is 
specified from the constructor, JavaScript assumes this, the newly created object, to be the 
intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return 
a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
