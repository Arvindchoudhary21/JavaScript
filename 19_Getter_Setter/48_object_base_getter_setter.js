// !yha object use kr rhe for getter and setter

const User = {
    _email : "arvind@gmail.com",
    _Password : "arvind123",

    // !define getter and setter
    get email(){
        return `email in uppercase : ${this._email.toUpperCase()}`;
    },

    set email(value){
        this._email = value;
    }
}
const tea = Object.create(User);
console.log(tea._email); //!using getter
tea.email = "prakash@gmail.com"; //!using setter
console.log(tea._email);

