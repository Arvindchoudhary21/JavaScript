function sayname(){
    console.log("a");
    console.log("b");
}
// sayname(); // simple function 
// sayname // indicates only refernce of funciton


function addtwo(number1 , number2) {
    console.log(number1 + number2);
    return number1 + number2;
}
addtwo(1 , "2") //output will be 12 in string
addtwo(1 , "a") //output will be 1a in string
addtwo(3 , null) // output will be 3

let result = addtwo(1 , 4);
console.log("result is = " , result); // undefined value of result jab tak tum 
// return use nhi kroge ok




function userlogged(username){
    if(username)
    {
        return `${username} just logged in`;
    }
    return "enter valid name";
}
let str = userlogged("arvind");
console.log(str);

// agar kuch pass nhi krenge to value undefined ata hai
console.log(userlogged()); // output me undefined hai
// also ek default value set kr ke rakh sakte hai ki agar koi value pass nhi hoga
// to osko carry kr lo nhi to jo value passed hai osko carry kro 
function userloggednew(username = "goku"){
    if(username)
    {
        return `${username} just logged in`;
    }
    return "enter valid name";
}

console.log(userloggednew()); // goku just logged in printed on output
console.log(userloggednew("arvind")); // arvind just logged in printed in output
// so isko yad rakhna 
