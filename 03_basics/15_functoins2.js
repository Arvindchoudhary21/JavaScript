function calculateCartPrice(num){
    return num; 
}
console.log(calculateCartPrice(2));//output will be 2 but what if multiple 
// number is given in the argument
console.log(calculateCartPrice(2 ,3 , 4)); // then only the first value will be 
// passed in the function so to pass all the value in the function use the three dot
// method 

// using rest operator wo 3 dot rest operator hai
function newcalculateCartPrice(...num)
{
    return num;
}
console.log(newcalculateCartPrice(2 ,3 ,4, 5 ,6));//it will return all the values in the 
// array format
function newcalculateCartPrice2(val1 ,val2 ,...num)
{
    return num;
}
console.log(newcalculateCartPrice2(2 ,3 ,4, 5 ,6));//it will return all the values in the 
// array format and 2 and 3 val1 and val2 me chala gya and rest array me convert ho gya 




// how to use objects in the function
const user = {
    username : "arvind",
    price : 99,
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user) // works fine 