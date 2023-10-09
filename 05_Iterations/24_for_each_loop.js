// for each loop
const heros = ["spiderman" , "ironman" , "hulk" , "thor" , "perman"];
// for each injected hai already in the arrays waha console me jake methods me dekho
// to tumko waha for each milega jo ki ye dikhata hai ki injected hai arrays me 
// like length property injected hai array me ok yad rakha 

heros.forEach( function (it){
    console.log(it);
} )
// so sabse pehle array ka name likho fir foreach likho fir ek callback function
// liko in the paranthesis and is function me name nhi hoga so avoid it and function 
// ke parenthesis me iterator likho ki kya use kroge and kuch bhi name de sakte ho 
// jaise maine it diya hai uper wale loop me and then you can print the elements 
// of the array simple ok


// foreach loop by arrow function 
heros.forEach( (it) => {
    console.log(it);
} )
// so same hai as uper wala bus jo foreach ka parenthesis hai osme arrow function
// likh do insted of normal function simple 

// also tum foreach ke parenthesis me function mat likho dusre jagah likho and 
// bas wo function ka name likh do foreach ke parenthesis me fir bhi run kr jayega 
function printme(val)
{
    console.log(val);
}
// heros.forEach(printme);  
// sirf name dena hai (only reference) execute nhi krna hai 
// matlab printme() ye mat likhna sirf printme likho ok and it works fine




// so ye foreach loop bhot sari chize recieve krta hai like index and whole array 
// for example 
heros.forEach( (it , index , arr) => {
    console.log(it , index , arr);
    // you will be surprised by seeing this 
    // so ye yad rakhna
} )