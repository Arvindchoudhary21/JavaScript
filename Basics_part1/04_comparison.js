console.log("2" > 1); //output = true but dekho it is not a good practice
// only compare the values with same data type.
// javascript to convert kr de rha "2" to 2 (string to integer) but sab language
// ye kam nhi krta so iska dhyan rakhna


console.log(null > 0); //output false
console.log(null == 0);//output false
console.log(null >= 0);//output true because equality is different from comparison 
// operator and null dekho 0 me convert ho sakta hai we know that so isiliye ye last 
// wala value true a rha hai yad rakhna okkkkk


// but if we use undefined then har condition me false result hi ayega kiuki 
// we know ki undefined to undefined hi reh jata hai wo kisi value me convert nhi hota
console.log(undefined >= 0);//or >= or <= > < har case me false hi ayega ok

// ** === 
// ye check me conversion nhi hota and datatype same rehne par hi conversion hoga 
// warna conversion hoga hi nhi

// so avoid this type of comparison and always compare with the same datatype ok