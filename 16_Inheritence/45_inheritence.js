// !example of inheritence
class User{
    constructor(username){
        this.username = username;
    }

    // logMe(){
    //     console.log(`Username is ${this.username}`);
    // }
}

class Teacher extends User{
    constructor(username , email , password){
        // !so we can use .call then pass this in parameter but ab no need to do this because 
        // !super keyowrd sab kuch handle kr lega so use super keyword
        super(username); //!even yha bhi this nahi lagana hoga
        this.email = email;
        this.password = password;
    }

    addNewCourse(){
        return (`new course is added to you ${this.username}`);
        // !console log krne se undefined bhi ek print ho rha thats why return use kro ki wo 
        // !undefine nhi ayega 
    }
}

// !test
// !dont forget to add new
const arvind = new Teacher("arvind" , "arvind@gmail.com" , 123);
console.log(arvind); //!works fine
console.log(arvind.addNewCourse());


// but if you call addNewCourse from User class then it will give error kiuki child ka parent se 
// !connection hai but parent ka child se connection nhi hai yha par 
// !for example
const masalachai = new User("masalachai");
// console.log(masalachai.addNewCourse()); // !this will not work ok
// ! but it will work because wo User class me hi hai
// console.log(masalachai.logMe()); 


// new*
// !kon kisse connected hai oske liye instance of use kr sakte ho like this 
console.log(arvind instanceof User);
console.log(arvind instanceof Teacher);
// !both true because arvind dono Teacher and User se bana hai you can see uper me 

console.log(masalachai instanceof User); //true
console.log(masalachai instanceof Teacher); //false because masalachai Teacher ko use nhi kiya hai
// !sirf User ko use krke bana hai ok