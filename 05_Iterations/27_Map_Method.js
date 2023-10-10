const myNumbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];

// now if i want to add 10 to every element then yes you can do using simple loop 
// but map method bhi acha hai to do this like modern way to do this 

// const newMyNumbers = myNumbers.map( (it) => (it + 10) );
// or you can write like this  ## scope open kro then return likhna parega ok
const newMyNumbers = myNumbers.map( (it) => { return it + 10 } );
console.log(newMyNumbers);




// chaining method in map filter like use chain of these
const nums = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];

const newnums = nums.map((it) => (it * 10) )
                    .map( (it) => (it + 1) )
                    .filter( (it) => (it >= 40) );
// means ki pehle to sab element ko 10 me multiply kiya fir onme 1 add kiya fir dekha
// ki jo element 40 >= hai onko sirf store kro newnums me ok so print newnums and see
console.log(newnums); // output is correct ok
// so you can use chaining by using multiple statement ok