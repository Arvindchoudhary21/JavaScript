// kabhi kabhi function ko immediately call krna hota hai like to connect to database 
// then immediately invoked function expression (IIFE) use hota hai so look at the 
// syntax of IIFE
(
    function chai(){
        console.log("DB connected");
    }
)(); // this will run ok this () means ki ye function call ho rha hai    
// global scope ke pollution ko hatane ke liye humlog ne IIFE ko use kiya taki 
// ek extra ye call wala word na likhna pare
// semicolon lagana mat bhulna nhi to koi aur IIFE function run nhi krega iske bad 

// IIFE with arrow function
(
    () => {
        console.log(`DB connected two`);
    }
)();



//how to pass parameter in IIFE
(
    (username) => {
        console.log(`hello ${username}`);
    }
)("arvind");
// IIFE function ka name do to wo named IIFE hai and bina name ke bhi IIFE ban jata
// hai like uper wala named IIFE hai and niche wala bina named IIFE hai