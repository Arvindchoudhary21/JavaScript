// !adding property to functions -> interesting
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // methods (bahar likhne se run nhi krega)
    encryptPassword() {
        return `${this.password}abc`;
    }
    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}

const chai = new User("chai", "chai@gmail.com", 123);
console.log(chai.encryptPassword()); //!print 123abc
console.log(chai);
console.log(chai.changeUsername());



// !behind the scene (other way to write property of function -> by using prototype)

function UserByFunction(username, email, password) {

    this.username = username;
    this.email = email;
    this.password = password;

    
}

UserByFunction.prototype.encryptPassword = function () {
    return `${this.password}abc`;
}

const arvind = new UserByFunction("arvind", "arvind@gmail.com", 123);
console.log(arvind); //!print the whole object created by UserByFunction
console.log(arvind.encryptPassword()); //!print 123abc

// ! so is type se bhi tum property bana sakte ho ya to tum class bana ke kro jo uper me kiye ho 
// !ya to tum function bana ke kro jo niche me kiye ho using prototype bas difference ye hai ki 
// tum class bana ke kr rhe the to property class ke andar hi tha but function bana ke agar kam kr rhe
// !ho to ya to function ke andar likho ya bahar kaam ho jayega ok