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
let heros = ["shaktiman" , "spiderman" , "perman" , "iron man"];
console.log(heros[3]); //print iron man

// object 
let obj = {
    Name : "arvind", 
    age : 22,
    home : "kolkata"
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

  
