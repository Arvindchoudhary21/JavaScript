let score = 33;

// so abhi type integer hai 
// console.log(typeof score); // output is number

let score1 = "33";
// console.log(typeof score1); //this is string but we can convert it to number

let score1_inNumber = Number(score1); //this will convert score1 in number from string
console.log(score1_inNumber); // this will ouput 33 in number

// but if we try to convert "33abc" to number then it is invalid okkkkkk
let score2 = "33abs";
let score2_inNumber = Number(score2);
console.log("score2_inNumber = ", score2_inNumber); //this will output NaN means it is not a number ok
// but typeof me output number hi ayega so dhyan rakhna iska kiuki type to change hua 
// hai but value number nahi hai 
console.log("type of score2_inNumber = ", typeof score2_inNumber); // output to number hai but value in number 
// nhi ho sakta ok


// also if value is null then ye 0 me convert kr dega 
let score3 = null;
console.log("type of score3_inNumber = ", typeof score3); // this will object 
let score3_inNumber = Number(score3);
console.log("score3_inNumber = ", score3_inNumber); //output = 0 and  ye 0 me convert kr rha joki problem create kr sakta hai
// because 0 is a value but null is not a value iska matlab kuch nhi okkkk so be careful


// but agar humlog undefined ko number me convert krenge to wo Nan hoga ok but dekho
// type to number hi show krega kuki number me convert kiye hai humlog but 
// jo value hai wo different ho sakta hai like null ke case me ye 0 ho gya but 
// undefined ke case me ye NaN ata hai means not a number ok
let score4 = undefined;
console.log("type of score4_inNumber = ", typeof score4); // output is undefined but in case of null it was object 
let score4_inNumber = Number(score4);
console.log("score4_inNumber = ", score4_inNumber); // output = NaN means not a number ok


// now ab agar koi value hai true so ye number me convert hoke 1 me convert ho jata hai
// example 
let score5 = true; // if false then 0 me convert krega ok
console.log("type of score5_inNumber = ", typeof score5); // output = boolean
let score5_inNumber = Number(score5);
console.log("score5_inNumber = ", score5_inNumber);


// if string is given to wo bhi number me convert nhi hoga 
let a1 = "arvind";
let a1_inNumber = Number(a1);
console.log("a1 type = ", typeof a1_inNumber);//output will be number
console.log("a1 in Number = ", a1_inNumber);//output will be NaN ok 


// now ab 1 ko bhi true me convert kr sakte hai
let b1 = ""; // if 0 then false me convert hoga baki kuch bhi value ho positive ho ya 
// negative ho ye true me hi convert krega okkk 
let b1_inBoolean = Boolean(b1);
console.log("b1_inBoolean = ", b1_inBoolean); //output = true

// empty string bhi false me convert hoga but non empty string true me convert hoga 
// ye yad rakhna 

// so aise hi humlog number ko bhi string me convert kr sakte using String(parameter)
let b2 = 11;
let b2_inString = String(b2);
console.log(b2_inString); // output is 11 but in string
console.log("type of b2_inString = ", typeof b2_inString);

// ********************operations ****************
console.log("arrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
console.log("2 ka power 10 = " + 2 ** 10); // this will give 2 power 10 ok yad rakhna 

console.log("2" + 1);//output will be 21 not 3
// but
console.log(1 + 1 + "2"); //output = 22 matlab pehle jo operation hai wo perform honge
console.log("2" + "2" + 1 + 1 + 1); //output = 22111 kiuki suru me string hai so 
// sabko string ke tarah treat kr diya but
console.log("2" + "2" + (1 + 1 + 1));//output will be 223 kuiki bracket lga diye ok 
// so ye sab chize yad rakhna 


console.log(+true); // output will be 1 not true
console.log(+""); //output will be 0 not empty string 