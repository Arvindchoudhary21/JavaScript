// array
// array elements can be different also matlb sab same nahi bhi hoga to chalega
const arr = [1 , 2 , "arvind", 3 ,4 ,5];
console.log(arr);

//## array object hai so isme shallow copy hota hai not deep copy ok

// another way to declare array
const arr2 = new Array(1 , 2 , 3 , 4 , 5);
console.log(arr2);
console.log(arr2.length);



// array methods
// 1. push to add value in array at last
arr.push(10);
console.log(arr);
// 2. pop() to remove last element
arr.pop();
console.log(arr); //removed last element
// 3. unshift -> insert value at starting
arr.unshift(20);
console.log(arr);
// 4. shift -> remove from the first
arr.shift();
console.log(arr);
// 5. includes 
console.log(arr.includes(1)); //return boolean true if present otherwise false
// 6. indexof
console.log(arr.indexOf(1));//return -1 if not found otherwise return the index 

// 7. join() -> change array to string by coma seperated 
const newarr = arr.join();
console.log(newarr); //type is string 
console.log(typeof newarr); //string

// 8. slice cut the portion of array slice(starting index , end index(not included))
const arr3 = arr.slice(1 , 4);
console.log(arr3);

// 9. splice means (start index , itna element utha lo from start index)
const arr4 = arr.splice(1 , 4);
console.log(arr4);
// ## slice me array change nhi hota but splice krne se original array hi change ho 
// jata hai

console.log(arr);
