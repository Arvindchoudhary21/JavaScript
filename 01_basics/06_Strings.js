const name = "arvind";
const cnt = 5;
console.log(name + cnt); // this is bad syntax

// in modern days use backticks which uses string interpolation
console.log(`my name is ${name} and cnt is ${cnt}`); 
// this is used in modern days so use this

// other way to declare string
const gameName = new String('arvaindcha'); //use this to see all the function available
// in stirng by using it in console of google chrome ok
console.log(gameName[0]);
console.log(gameName.length); //gives length of string 
console.log(gameName.toUpperCase()); //converts to upper case but original string 
// waise ka waisa hi hai bas upper case me convert krke output dikha rha hai
console.log(gameName.charAt(5)); // tells ki 5th index par kya hai
console.log(gameName.indexOf('a')); // tells ki d kis index pr hai
// if same character multiple time hone se jo sabse pehle milega oska index return krega

const newString = gameName.substring(0 , 3);//3rd index include nhi hoga 0 1 2 index
// include hoga  
console.log(newString);

const anotherString = gameName.slice(-2 , 10); // same as substring ok but we can give
// negative value of index here also -> -1 means n-1 index and -2 means n-2 index and 
// so on ok yad rakhna and second parameter end point hai and wo consider nhi hota
console.log(anotherString); 

// trim function
const newStringOne = "  arvind  "; // to remove spaces use the trim method
const newStringTwo = newStringOne.trim();
console.log(newStringOne); //with spaces stirng printed
console.log(newStringTwo); // without spaces string printed

// replace method
const str = "arvindchoudhary";
console.log(str.replace('cho' , 'ar'));//ye cho ko ar me change kr dega
// note agar multiple cho honge string me to ye pehla ko hi change krega ok baki sab 
// waise hi rhenge ok

// includes method
console.log(str.includes('arvind')); //output true because arvind string me hai
// agar nhi hoga to false return krega

// split method
// we can split anything like by dash like 
const str1 = "arvind-choudhary";
console.log(str1.split('-')); // return array of integers ok 


