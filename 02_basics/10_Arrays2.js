const marvel_heros = ["spiderman", "Ironman", "Thor", "Hulk"];
const anime_hero = ["Goku", "Vegeta", "Perman", "Naruto"];

// if we do
// marvel_heros.push(anime_hero); // it will push the whole array anime_hero to the 
// marvel_heros array matlab array ke andar array
// console.log(marvel_heros);

// but concat function dono array ko merge krta hai and new array return krta hai
const all_hero = marvel_heros.concat(anime_hero);
console.log(all_hero);

// another method -> spread method to merge arrays
const new_all_hero = [...marvel_heros, ...anime_hero]; //three dot important hai
console.log(new_all_hero);
// advantage -> multiple arrays ko merge kr sakte hai simply by writing the name of 
// the array -> so ye isko simple banata hai


// now if array ke andar array hai but humlog ko array in single element ke form me 
// chahiye then flat method se pura array as array of single element ban jayega 
const new_array = [1, 2, [3, 4, 5, [6, 7, 8], 9, 10], 11, 12];
const real_new_array = new_array.flat(Infinity)//tum depth de sakte ho ki kitna depth
// tak todna hai but infinity dene se pura depth hi tut jayega
console.log(real_new_array);
/*output -> 
[
    1,  2, 3, 4,  5,
    6,  7, 8, 9, 10,
   11, 12
 ]
 */


//  now check if given thing is array or not 
console.log(Array.isArray("arvind"));//return false because it is string not array
// to convert to array then 
console.log(Array.from("arvind")); //convert to array

console.log(Array.from({ naming: "arvind" })); //isko array nhi bana payega kuki 
// andar me ek object hai and define nhi hai ki kisse array banana hai key se ya fir
// value se so return krega ek empty array



// make array from variables 
let a = 100;
let b = 200;
let c = 300;
console.log(Array.of(a, b, c)); //create array of a , b , c so yad rakhna 
let arr = [];
arr.push(a);
arr.push(b);
arr.push(c);
console.log(arr);//aise bhi kr sakte ho ok