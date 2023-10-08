// constructor se object banega to wo singleton hota hai but 
// literals ki tarah declare krne se singleton nhi banta ok

// Object.create() //yhi constructor method hai to create object but leave it right now

// Object literals
const mysym = Symbol("key1");

const user = {
    Name : "arvind",
    age : 22,
    [mysym] : "mykey1",
    location : "Kolkata",
    isloggedIn : false,
    "email" : "arvind@gmail.com"
}
// method to acces value by key
console.log(user.Name);
console.log(user["location"]);// this is more useful because agar key "" aisa hoga
// so dot method se access nhi ho payega so yhi use krna hoga 
console.log(user["email"]);




// how to add symbol in object so first decare symbol uper me dekho declared hai
// and object me add krte time [] iske andar likhna hota hai dekho uper maine likha hai
console.log(user[mysym]); // this is the correct syntax for symbol ok
// in output dekho ye show kr rha -> [Symbol(key1)]: 'mykey1' jo correct hai ok
// output krke dekh lena
console.log(user);




// how to change value in object
user.Name = "prakash";
console.log(user);





// freeze kr doge to value change nhi hoga -> method
// Object.freeze(user);
// now koi bhi changes nhi hoga ab user object me ok




// connect function to the object 
user.printhello = function(){
    // console.log("hello user");
    return "hello user";
}
// now ab function bhi accesable hai from the object
// ##** dhyan rhe ki freeze mat rakhna object ko nhi to chagnes hoga nhi to 
// function add nhi hoga in the object 
console.log(user.printhello);  
console.log(user.printhello());


// now ab object ke items ko function me use kr skte hai for exmple 
user.printuser = function(){
    return `hello your name is ${this.Name}`;
}
// now ab use kro printuser function
console.log(user.printuser()); // works fine
// output -> hello your name is prakash