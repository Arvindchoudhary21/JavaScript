let myName = "arvind      ";
console.log(myName.length); //! output 12 but I want 6 as output 
// !we can do using trim method then use length but our goal is to create a method to get 
// !true length (without spaces)
// console.log(myName.trueLength); // !kuch is tarah ka banana chahta hu so let's create this



// !start building but first learn how to create a common property for all the data structures
// !like it will work on all the data structure and agar tum sirf array ke liye banana chahte ho to
// !wo bhi kr sakte ho but Object.prototype use krke banaoge to sab data structure ke liye banega 
// !kiuki we know every thing is a kind of object and sab object wali layer sa hi pass hote hai to find
// !its functions ok
// ! for example 
let myHero = ['Thor' , 'Spiderman'];
let heroPower = {
    Thor : "Hammer",
    SpiderMan : 'sling',
    getSpiderPower : function(){
        console.log(`Spider power is ${this.SpiderMan}`);
    }
}

// ! ab kya main ek common property bana sakta hu for both array and object -> yes ofcourse
Object.prototype.arvind = function(){
    console.log("hello arvind this is common method for all the data structures");
}
// ! ab ye uper me jo array hai oske liye bhi kam krega and uper me jo object hai oske liye bhi 
// !kaaam krega for example 
myHero.arvind();
heroPower.arvind();
// ! note -> but if at line 25 object se hata ke main array likh dunga so sirf wo array par work krega 
// ! in this way we can create a common method for all data strucutures 


// new*
// !about inheritence (Prototypal inheritence)

const user = {
    username : "chai",
    password : "chaichai"
}

const Teacher = {
    makeVideo : true,
}

const TeachingAssistent = {
    isAvailable : false,
}

const TA = {
    makeassignment : "js",
    fulltime : true,
    // !if you want to use the method of TeachingAssistent also then use __proto__
    __proto__ : TeachingAssistent,
}
console.log(TA.isAvailable);//! I can acces the property of TeachingAssisten from the TA object
// ! this is called inheritence in javascript
// !also we can set this globally 
// !Teacher will acces the user also then 
Teacher.__proto__ = user;
console.log(Teacher.username); //!works fine 


// !modern syntax to write this prototypal inheritence 
Object.setPrototypeOf(TeachingAssistent , Teacher);//!Teacher ki sari property ab TeachingAssistent
// !access kar payega for example
console.log(TeachingAssistent.makeVideo); //!work fine




// new*
// ! now do our goal was to create a trueLenth method for string having extra spaces
let str = "arvind        ";

// !create a method for 
String.prototype.trueLength = function(){
    console.log(`${this}`); // this will print arvind kiuki arvind ka hi instance aa rha hai from 
    // !str.trueLength()

    console.log(`True length of string is = ${this.trim().length}`);

}
str.trueLength();
"hello       ".trueLength();
// !so is type se create kr sakte ho common function for every string par
// !advice is to use this agar tumko har data structure me wo function lagana hai so ye use kro
