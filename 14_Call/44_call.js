// !example for call function

function SetUsername(username){
    // complex DB call jo bhi hua fir
    this.username = username;
    console.log("this function is called"); //!to verify ki ye call ho bhi rha hai ya nhi
}

function CreateUser(username , email , password){
    SetUsername.call(this , username);

    this.email = email;
    this.password = password;
}

const chai = new CreateUser("chai" , "chai@google.com" , "abc123");
console.log(chai);
// !without this call only email and password will show in output but please include call method
// !tabhi wo jo SetUsername function me work ho rha hai wo forward hoga CreateUser function me 
// !and also include this keyword in argument jo call kr rhe ho 