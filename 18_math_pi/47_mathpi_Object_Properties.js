// !so we can get value of pi but we cannot change the value of pi because in object of pi 
// !the writable function is set to false -> means tum new value write nhi kr sakte for example 
console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI); //!still it will be 3.14

// !to look at property of PI object use getOwnPropertyDescriptor
const descriptor = Object.getOwnPropertyDescriptor(Math , 'PI');
console.log(descriptor); //!in output you can see writable is set to false isiliye pi ka value change
// !nhi hota


console.log("end"); //just for seperate lines 


// !for example
const chai = {
    Name : "ginger chai ",
    price: 200,
    isAvailabe : true,

    orderChai : function (){
        console.log("chai bana ya nhi");
    }
}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai , 'Name'));
// !you can look that writable = true hai means we can change name of that chai object samjhe 

// !running loop on object
for (const key in chai) {
    if(typeof chai[key] !== 'function')
    console.log(key + ":" + chai[key]);    
}   




// !now you can change the writable = false so that no one can change the value of name for example
Object.defineProperty(chai , 'Name' , {
    writable : false,
    enumerable : false
})

console.log(Object.getOwnPropertyDescriptor(chai , 'Name'));
// ! now you can see writable and enumerable false me set hai

// !but yha tumne Name ka enumberable : false krke rakha hai then Name par loop nhi chalega ok
// !Note this 
for (const key in chai) {
    if(typeof chai[key] !== 'function')
    console.log(key + ":" + chai[key]);    
} 
