//! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
// !read about promises from upper link

// !there is two part -> create promise and consume promise

// !creating pormise
// !part of promises->resolve ya reject (ya function reject hoga ya resolve)
const promiseOne = new Promise(function (resolve, reject) {
    //can Do async task , Database calls , cryptography , network

    setTimeout(() => {
        console.log("Async task completed");
        resolve(); //! this will directly connect to .then function and without this .then function will not work
    }, 1000);

});

// !method to consume promise ->it will take a callback function
promiseOne.then(function () {
    console.log("Promise Consumed");
})


// *new
// !method to direct create promise 
new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function () {
    console.log("Async task 2 is resolved");
})



// *new
// !taking data by resolve() from the promise function 
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        // !you can pass object array in the resolve function
        resolve({ Name: 'arvind', email: 'arvind@gmail.com' })
    }, 1000);
})

promiseThree.then(function (user) {
    console.log(user); //receiving the whole object passed at resolve() method (line 42)
})


// *new
// !using reject and catch
const promiseFour = new Promise(function (resolve, reject) {

    setTimeout(() => {
        const error = true;
        if (!error) {
            resolve({ username: "arvind", password: "arvind2" })
        }
        else {
            reject("ERROR : something went wrong");
        }
    }, 1000);

})

promiseFour.then(function (user) {
    console.log(user); // it will print whole object 
    return user.username; // it will return to its child chain function 
}).then(function (username) {
    console.log(username);
}).catch(function (err) {
    console.log(err); // if reject then this will be printed ok (line 56 ko true krke check kr lo)
}).finally(() => {
    console.log("promise is either rejected or resolved");
})
// !.then when promise is resolve() then .then will execute
// !.catch is for error because when error recived then .catch will work
// !.finally will always execute either promise is resolved or rejected ok





// *new
// asynch await syntax of promise (.then .catch wala syntax bhi use kr sakte ho jo man kre wo use kro)
const promiseFive = new Promise(function (resolve, reject) {

    setTimeout(() => {
        const error = true;
        if (!error) {
            resolve({ username: "arvind", password: "arvind2" })
        }
        else {
            reject("ERROR : something went wrong");
        }
    }, 1000);

})

async function consumePromiseFive() {
    // !without try and catch if error recived then run hi nhi hoga terminal error ayega 
    try {
        const response = await promiseFive; //take reference of promiseFive and use await
        console.log(response);
    } catch (error) {
        // !if error is found then this is executed 
        console.log(error); //!make error == true to check this (line 90)
    }
}

consumePromiseFive();







// !recive data from link
// https://api.github.com/users/Arvindchoudhary21
// !using the fetch keyword -> it return promise matlab jo promise create kr rhe the wo jarurat nhi hai 
// !because ek promise recieve hoga by fetch
async function getUser() {
    try {
        const respone = await fetch('https://api.github.com/users/Arvindchoudhary21');
        // !data string me ata hai so convert it to json
        const data = await respone.json(); //!isme bhi await use krna hoga kiuki respone ane me time lagta hai 
        // !ekdam quick to ata nhi so isiliye await use krna hoga
        console.log(data);
    } catch (error) {
        console.log("Error : " , error);
    }

}
getUser(); //yes user is printing



//! same uper wala code by .then .catch method
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