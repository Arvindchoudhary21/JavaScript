// we can define number like 
const score = 500;
// it will automatically consider it as number but also we can create an 
// number manually 
const balance = new Number(100); // this is defined manually a number
console.log(score);//output only 400 
console.log(balance); // output [number : 100] because it tells that ki ye number hai
// and agar hum as line number 5 me hai waise google ke console me run krenge to 
// wo number ke kuch functions bhi dikhayega jaise stirng ka function hum log 
// dekh paye the aise hi define krke console me google chrome ka ok 




// number to string
console.log(balance.toString()); // output 100 but as string
console.log(balance.toString().length); // output 3 length of string




// tofixed method to get points like value like 10.00 when tofixed(2) is input
console.log(balance.toFixed(3)); // output = 100.000 used to fixed ki yhi tak point 
// me value dekhna hai osse next nhi dekhna hai




// precision
let otherNumber = 12.5;
console.log(otherNumber.toPrecision(2)); // output is 13 but
console.log(otherNumber.toPrecision(2)); // output is 13 but in 12.4 me output 12 ayega
// because ye dekha 4 to half part se less hai so number ko floor kr do and 5 or greater
// than 5 hone se ye 13 kr dega ok # it returns a string ok so yad rakhna
// also look at this exmaple 
console.log((1234.5).toPrecision(2)); // '1.2e+3' because sirf 2 hi lena hai so 1.2 to
// wo ho gya baki ka part wo power of 10 me show kr rha ok so ye yad rakhna 



// locale string to change the string to add coma in the string jo cash wagera padhne
// me asani ho 
let money = 10000000;
console.log(money.toLocaleString('en-IN')); //gives according the indian system




// *****************************Maths*******************************************
// console.log(Math); // Object [Math] {} this is the output
// run this in console of chrome and see the function of maths 
// isme print krne par ye object banayega

// abs value 
console.log(Math.abs(-2)); // 2
// round
console.log(Math.round(4.5)); //4.4 <= then ouput 4 if >=4.5 then output 5 
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.2)); // 4
console.log(Math.min(1,2,3,4));//1
console.log(Math.max(1,2,3,4));//4



// math.random
console.log(Math.random()); //range >=0 and <=1
console.log((Math.floor(Math.random()*10)) + 1); //values between 1 and 10 dega

// trick
// to get value between a range 
const min = 10;
const max = 20; // find random values between 10 and 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // output between 10-20







