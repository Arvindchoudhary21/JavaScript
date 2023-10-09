const user = {
    username : "arvind",
    pricce : 299,
    welcomemessage : function(){
        console.log(`${this.username} , welcome to webiste`);
        console.log(this); //ye dikhayega ki kya kya key value hai in the object 
    }
}
user.welcomemessage();
// but agar this yha print krenge to empty object ayega kiuki yha koi this hai hi nhi
// but agar tum isko google chorme ke console me print kroge to window object
// ata hai because waha pe ek global object hai jo ki sare function carry krta hai
// like click and sare buttons jo humlog chrome me use krte hai so isko yad rakhna
console.log(this); // empty object







// ## this keyword use nhi hota in the function sirf object me use hota hai for example
// function one(){
//     let username = "arvind";
//     console.log(this.username); //arvind print nhi hoga
// }
// one(); 






// second type of function
const two = function(){
    console.log("arvind");
}
two(); //prints arvind 





// arrow function 
// bas uper wala function me se function hata ke arrow laga do ban gya arrow function
const three = () => {
    console.log("arvind choudhary");
    let username = "arvind";
    console.log(this.username); // yha bhi this keyword work nhi krega yad rakhna 
}
three();

// arrow funtion
const addtwo = (num1 , num2) => {
    return num1 + num2;
}
console.log(addtwo(1 , 2));





// implicit return in arrow function
// dont use parenthesis 
// curly braces me return likhna parta hai but parenthesis use kr rhe ho to
// return keyword nhi likhna parega ok ## react me use hoga ye ok
const addtwo2 = (num1 , num2) => (num1 + num2);
console.log(addtwo2(1 , 2));

const addtwo3 = (num1 , num2) => ({username : "arvind"});
console.log(addtwo3(1 , 2)); // returns the object okkkk

// explicit return me curly braces use hota hai and return likhna parta hai