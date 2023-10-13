class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // methods 
    encryptPassword() {
        return `${this.password}abc`;
    }
    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}

const chai = new User("chai" , "chai@gmail.com" , 123);
console.log(chai.encryptPassword()); //!print 123abc
console.log(chai);
console.log(chai.changeUsername());