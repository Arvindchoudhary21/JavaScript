// kis tarah se data ko memory me store kiya jata hai oske hisab se two types of 
// data types hai first = primitive and second = non primitive

// # primitive 
// ye data types ka copy ke sath humlog operation krte hai ok not with actual data
// number , string  , boolean , symbol , null , undefined , BigInt

// Non primitive or reference type 
// so is type ke datatypes ka direct reference form memory allocate kiya ja sakta hai
// Array , Objects , functions 

// javascript is dynamically typed language hai it means ki value assign krne ke bad 
// wo khud samjh lega ki kon sa datatype assign krna hai

let email = undefined;
let email2;
// both are same dono me value nhi hai

// use of symbol
const id = Symbol('123');
const another_id = Symbol('123');
// it seems like ye dono ka value same hoga but same nhi hoga they are different 
console.log(id === another_id);// output = false because dono same nhi hai so it is the
// use of symbol ok


// bigint
let big_number = 85478794654n;
console.log(big_number);

// array
let heros = ["shaktiman", "spiderman", "perman", "iron man"];
console.log(heros[3]); //print iron man

// object 
let obj = {
    Name: "arvind",
    age: 22,
    home: "kolkata"
}
console.log(obj); //prints the obj

// function
const square = function (number) {
    return number * number;
};

console.log(square(4)); //output = 16

// also we can know the type of value by typeof method
console.log(typeof big_number); //output = bigint
console.log(typeof square); //output is function kiuki square ek function hai
console.log(typeof heros); // object
console.log(typeof obj); //object
console.log(id); //symbol hi type hai
console.log("arvind arvind");
console.log(another_id); //symbol hi type hai


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


// **************stack and heap memory in javascript**************************
// 1. stack is used in primitive data types jo ki uper me defined hai ok
// example 
let myname = "arvind";
let othername = myname; //so myname ka copy othername me transfer ho jayega 
othername = "prakash"; // ye kiya to myname change nhi hoga but other name change hoga
// so myname stack me hai apna and othername bhi stack me hai and change hua abhi

// 2. heap is used in all non primitive data types jo uper defined hai
let userOne = {
    username: "arvind",
    email: "user@gmail.com",
}
let userTwo = userOne;
// so if we change userTwo then it will reflect in userOne also ok 
userTwo.username = "aradhya";
console.log(userOne); // so change kiya main userTwo me but change userOne me bhi 
// show kr rha so ye heap me store hote hai and ek hi address space ko point kr rhe the
// dono userOne and userTwo and ek bhi change hua to dono me reflect krega ok
console.log(userTwo); // same output isme bhi

// same goes to array also osme bhi change ho jayega agar tum copy array me changes kroge 
