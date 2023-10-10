const myNums = [1 , 2 , 3 ,4];

// to calculate total of a array we can use the reduce method like this 
let initialVal = 0;
const mytotal = myNums.reduce( function(accumulator , currVal) {
    console.log(`accumulator = ${accumulator} and currVal = ${currVal}`);
    // written to check what is happening ok
    return accumulator + currVal;
} , initialVal)

// so dekho reduce ke andar ek callback function likhna hai tum arrow function likho
// ya simple function likho bat same hai and parentehsis me accumulator and currval
// dono likhna prega and dekho first me accumulator wahi value lega jo line 
// 7 me likha hai ya to tum variable define krke likho ya direct number likh sakte ho
// waha par ok oske bad accumulator previous value ko use krega and sum krte jayega 
// matlab jo operation perform krna hai wo krte jayega ok
console.log(mytotal); // output 10 as correct



// writing using arrow function
const myNumbers = [1 , 2 , 3 ,4, 5];

const total = myNumbers.reduce( (accumulator , currVal) => (accumulator + currVal),0);
console.log(total);
// is bar dekho direct 0 likh diya hu waha variable bana ke pass nhi kiya hu so 
// aise bhi likh sakte ho ok




// adding values given in objects 
const shoppingCart = [
    {
        Name : "shoe",
        price : 999
    },
    {
        Name : "shirt",
        price : 500
    },
];

// add this price using reduce method 
const total_price = shoppingCart
.reduce( (accumulator , currItem) => (accumulator + currItem.price),0);
console.log(total_price);
// so aise humlog simply reduce method se total sum nikal sakte hai object me agar
// price diya hai to ok
