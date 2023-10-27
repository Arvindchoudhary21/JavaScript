
// variables 


// 1. const keyword
const accountId = 1;
// then humlog isko 2 me convert nhi kr sakte ok
// accountId = 2; // this is not allowed here 
console.log(accountId);

// 2. let
let accout_name = "arvind";
// let and const is used always
// let ko humlog change bhi kr sakte hai ok
accout_name = "prakash";
console.log(accout_name);

// note -> var keyword is not used here because it does not know scope
// example 
var a = 1;
if (true) {
    var a = 2;
}
console.log("a = " + a);//here a is changed but in case of let it will not change 
let b = 1;
if (true) {
    let b = 2;
}
console.log("b = " + b); //b 1 ka 1 hi hai but uper me var me a change ho gya so it is the problem of var 
// so dont use var only use let and const ok

// **
let accoutState; //it will contain the value indefined ok so yad rakhna 

// also table ke form me console kr sakte hai hum
console.table([accountId, accoutState, accout_name]);

