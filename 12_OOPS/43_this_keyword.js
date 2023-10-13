const user = {
    username : "Arvind",    
    loginCount : 8 , 
    signedIn : true,

    getuserdetails : function(){
        // console.log(username); //!ye error dega ki isko pata hi nhi hai kis username ka bat ho rha 
        console.log(this.username , ", hello how are you?"); //!after adding this ab pata hai ki jo object me ye function hai
        // !osi object ke username ki baat ho rhi hai 

        console.log(this); //! it will print all the three properties jo uper me hai
    }
}

// console.log(user.getuserdetails());

// console.log(this); //! here you will get empty object as output but in console of chrome wha window
// !object milta hai matlab wha bohot objects already use ho rhe hai so wo sab show krte hai




// new*
// !constructor function
// const date = new Date();
// const promiseOne = new promise();
// ! ye sab object se hi ban rhe hai using constructor function

// !example 
function CreateUser(username , loginCount , isloggedin){
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedin = isloggedin;
    this.greetings = function(){
        console.log(`welcome ${this.username}`);
    }
    return this; //to return the object 
}

const userOne = new CreateUser("arvind" , 2 , true);
const userTwo = new CreateUser("Prakash" , 3 , false);
console.log(userOne);
console.log(userTwo);
// ! if new keyword use nhi kroge to jo first me userone bana tha oska values par usertwo me jo 
// !passed hai wo over write ho jayenge maltab same object pr work ho jayega so to avoid this 
// !use new kyeword -> means ki naya object bana ke do mujhe purana wala ap apne pas rakho
// ! new remove krke print kra ke dekhna pta chal jayega 

// !about new keyword
/*
1. first empty object is created 
2. constructor function is called with arguments passed
3. inject all the values passed as arguments in funciton
4. return the object with 
*/ 