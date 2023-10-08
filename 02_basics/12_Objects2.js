// Objects by singleton (by constructor)

const tinderuser = new Object();
// or
// const tinderuser = {}; both are same 
tinderuser.id = 123;
tinderuser.Name = "arvind";
// console.log(tinderuser); //output the object


// ab object ke andar object 
const regularuser = {
    email : "user@gmail.com",
    fullname : {
        firstname : "arvind",
        lastname : "choudhary",
    }
}
// so kabhi kbhi ? use krte hai jab api use krenege tab matlab agar os type object 
// nhi hai to mat kro wrna kro
console.log(regularuser.fullname.lastname);




// merging two objects 
const obj1 = {
    1 : "a",
    2 : "b",
}
const obj2 = {
    3 : "c",
    4 : "d",
}

const obj3 = {obj1 , obj2};
// console.log(obj3);
// problem hoga object me object ghus jayega so dont do this 
const obj4 = Object.assign({} , obj1 , obj2);
console.log(obj4);
// use assign method ye best hai to merge objects and dekho 
// in bracket ({},object,object,...) first is {}->object isko target manke object
// add krte jao okkkk isme yhi meaning hai iska and isko nhi doge fir bhi run ho jayega
// but for better understanding log isko use krte hai



// also we can merge like array ko kiye the using spread method object ko bhi 
// merge kr sakte hai using spread method
const obj5 = {...obj1 , ...obj2};
console.log(obj5);




// object me object how to access
const users = [
    {
        Name : "arvind",
        email : "a@gmai.com"
    },
    {
        Name : "arvindfasdd",
        email : "a@gmai.codfdm"
    },
    {
        Name : "arvdgadind",
        email : "a@gmaifgsf.com"
    },
]
console.log(users[0].email); // this is the method to access the each object in the 
// array ok




// how to extract keys from the objects 
const newtinderuser = {
    Name : "arvind",
    age : 22,
    location : "kolkata",
    email : "a@gamil.com",
}

// print keys of objects 
console.log(Object.keys(newtinderuser));//returns array of keys 
// also you can print the values 
console.log(Object.values(newtinderuser));
// entries me bhi convert krke le sakte hai jisme har element array hoga with
// key and value
console.log(Object.entries(newtinderuser));



// check ki ye value hai ki nhi in the newtinderuser object me 
console.log(newtinderuser.hasOwnProperty('email'));//true because email hai object me 
// return false when value is not present in the object 





