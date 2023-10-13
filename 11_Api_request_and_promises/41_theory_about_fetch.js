// !using the fetch method
fetch('https://api.github.com/users/Arvindchoudhary21')
.then(function(user){
    return user.json();
})
.then(function(userinjson){
    console.log(userinjson);
})
.catch(function(error){
    console.log("error" , error);
})

// !ab dekho jo object hai wo pehle print ho rha jabki ye code to last me hai ye kyu ho rha 
// !see next video to know ki kyu ho rha hai
// !aisa ho rha tha previous file 40_promises me ok so understand this kyu ho rha tha 

// ! read the documentation of fetch from mdn 

/*
    fetch ka jo bhi call hai wo jata hai microtask queue / priority queue / fetch queue jo ki ye bhot
    high priority queue hai isiliye previous code me fetch wala output first me aa rha tha 
    bak sab output last me aa rhe the (see diagram)
*/ 