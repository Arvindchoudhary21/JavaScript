const arr = [1 , 2 , 3 , 4 , 5];

// for of loop discussion
for (const it of arr) {
    // console.log(it);
} 
// same as for each loop use krte ho c++ me aise hi hai ok
// and jo bhi iterate ho sakta hai onpe loop laga sakte hai like array,string,object
const greetings = "hello world";
for (const it of greetings) {
    // console.log(it); // prints the string ok
}





// Maps in javascript
// it only contains unique values not duplicate values 
const map = new Map();
map.set('goku' , 'first');
map.set('vegeta' , 'second');
map.set('gohan' , 3);
map.set('piccolo' , 4);
map.set('goten' , 5);
map.set('trunks' , 6);
console.log(map.get('goku'));
console.log(map.get('gohan'));
map.delete('trunks');
console.log(map.size);
// console.log(map); // output the whole map print krke dekhna ek bar pura ache se 
// print krta hai ey 

// for of loop on map
for (const it of map) {
    // console.log(it); // so ek oject ke format me aa rha hai ye typeof krke dekha 
}
// to get the individual value first and second yha use nhi hoga jaise c++ me 
// krte ho yha par jo it hai osko expand krna hoga 
for (const [key , value] of map) {
    // console.log(`${key} ----> ${value}`);
    // aise use krna hoga ok
}





// for of loop on object
const obj = {
    game1 : "nfs",
    game2 : "hitman",
    game3 : "cod",
    game4 : "god of war"
}
// for (const [key] of obj) {
//     console.log(key);    
// } // so ye method work nhi krega so for of loop objects par kaam nhi krega 


// **********************************for in start****************************


// so use for in loop to iterate objects ok
for (const key in obj) {
    // console.log(key); // only output key so for value use this 
    // console.log(obj[key]); //so isse object print hoga and dono print krne ke liye
    // console.log(`${key} -> ${obj[key]}`); 
    // so use this to iterate on objects ok yad rakhna 
}





// for in on arrays 
const programming = ["js" , "ruby" , "c++" , "c"];

for (const key in programming) {
    // console.log(key); // so it is printing 0 1 2 .... means index so use this 
    // console.log(programming[key]); // simply print the array
}




// for in on maps 
const mp = new Map();
mp.set('goku' , 'first');
mp.set('vegeta' , 'second');
mp.set('gohan' , 3);
mp.set('piccolo' , 4);
mp.set('goten' , 5);
mp.set('trunks' , 6);
for (const [key , value] in mp) {
    console.log(key);    
}
// so map ko for in se iterate nhi kr sakte ok yad rakhna 
