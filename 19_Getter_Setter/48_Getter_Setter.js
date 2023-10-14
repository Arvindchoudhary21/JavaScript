// !getter define kroge to setter bhi define krna hi hoga

// !yha class use kr rhe for getter and setter
class User {
    constructor(email , password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return `${this.pass}arvind`; // !same password keyword mat use krna nhi to problem ho jayega
    }

    set password(value){
        this.pass = value; // !same password keyword mat use krna nhi to problem ho jayega
    }

    get email(){
        return `email in uppercase : ${this.__email.toUpperCase()}`;
    }

    set email(value){
        this.__email = value;
    }
}

const arvind = new User("arvind@gmail.com" , "abc");
console.log(arvind.password);
console.log(arvind.email);
// !setter wahi overwrite kr rha hai kiuki pass to kr rha hu abc par mil rha hai abcarvind so yhi
// !fayda hai getter and setter ka ok samjhe bro