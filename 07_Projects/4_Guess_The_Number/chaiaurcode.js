// first of all we have to create a random number between 1 - 100
// this will give the random number between 1 and 100;
let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

// store the submit button kiuki ospe hi event wagera lengenge
const submit = document.querySelector('#subt');

// also user ka value chahiye so oske liye bhi wo guessfield wala id use hoga
const userInput = document.querySelector('#guessField');

// previous guesses keliye bhi lagega ek guess slot ye ek array type hoga
// value puss krte jayenge isme ok
const guessSlot = document.querySelector('.guesses');

// remaininig kitna bacha hai wo bhi lena hoga from last result
const remaining = document.querySelector('.lastResult');

// also input number low hai ki high wo bhi dikhana hai so ek paragraph
// hai html with class lowOrHi osko choose kro
const lowOrhigh = document.querySelector('.lowOrHi');

// jab user ke pas guess khatam ho jayega fir again startover krna hoga
// so oske liye bhi pura div result_paras(html me hai class) dena hoga
const startOver = document.querySelector('.resultParas');

// let prevGuess = []; // array to store the guesses user guessed till (iska to significance hi nhi hai)
let numGuess = 1; // how many guesses user tried
let playGame = true; // if true then user can play the game

// iska use padega niche dekhna ok
const p = document.createElement('p');


// ab agar playgame true hai to khelna suru kro
if (playGame == true) {
    // now event ko listen kro submit jo tum store kiye the osska help se
    submit.addEventListener('click', function (e) {
        // ab form hai to information server par jayegi to osko stop krna hoga so use this 
        e.preventDefault();

        // now ab get the value of the user input 
        const guess = parseInt(userInput.value);
        console.log((guess));
        validateGuess(guess);
    })
}




// create some functons
// this function will tell that the input is valid or not like
// it need to be a number between 1 and 100
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("please enter a valid number");
    }
    else if (guess < 1) {
        alert("please enter number greater than 0");
    }
    else if (guess > 100) {
        alert("please enter number less than equal to 100");
    }
    else {
        // so number correct input hua hai to prevguess me push kr do
        // prevGuess.push(guess);

        // ab agar chances khtam ho gya hai to game over kr do
        if(numGuess === 11){
            displayGuess(guess);
            dispalyMessage(`you game is over the number was ${randomNumber}`);
            // game bhi end kr do
            endGame();
        }
        else {
            // ab chances bache bhi hai to kya kre so 
            displayGuess(guess);
            // ab number check krna hoga higher hai ya lower hai ya fir equal hai
            checkGuess(guess);
        }
    }
}

// this function will output if the guessed value equal to the
// correct value or not or also print the value if the
// guessed value is high or low
function checkGuess(guess) {
    if(guess === randomNumber){
        dispalyMessage(`you won the game. the guess was right.`);
        endGame();
    }
    else if(guess < randomNumber) {
        dispalyMessage(`your number is less than the actual number`);
    }
    else if(guess > randomNumber){
        dispalyMessage(`your number is bigger than the actual number`);
    }
 }

// ye function me jitna kuch display krna hoga screen pr wo sab hoga like
// new array show krna fir input ko fir se blank kr dena fir remaining guess
// decrease krna ye sab
function displayGuess(guess) { 
    // so jo userinput kiya hai osko empty banao kiuki fir se move chalna hai
    userInput.value = ''; //cleanup of the input section ok

    // ab jo guess slot liye the osme tumko jo guess hai wo add krte jana hai taki show kre
    // ki kya kya chal diye ho tum
    guessSlot.innerHTML += `${guess} `;

    // and numbr of guesses ko bhi increase krna hoga 
    numGuess++;
    // but isko class lastresult me show krna hai to fir isko kitna chances bacha hai os hisab se 
    // show krna hoga 
    remaining.innerHTML = `${11 - numGuess}`;
}

// simply display krega message ki ap correct number choose kiye ho ya
// low ya high number choose kiye ho
function dispalyMessage(message) {
    // ye to simple loworhigh jo class hai html me whi par value insert krna hai
    lowOrhigh.innerHTML = `<h2>${message}</h2>`
 }

// to end the game
function endGame() {
    // so first of all userinput value sab clean kr do
    userInput.value = '';

    userInput.setAttribute('disabled' , ''); // isse input disabled ho jayega

    // 1.p class jo uper hai osme class button added
    // 2.in p ka inner html --> add id and text 
    // 3.startover me appendchild kro p ko
    // 4.newgame call kro
    p.classList.add('buttons');
    p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    newGame();
 }

// to start a new game
function newGame() { 
    // jaruri nhi ki click ke liye button lena hoga h tags can behave like buttons
    const newGameButton = document.querySelector('#newGame'); //from line 138
    // listen to newgamebutton  
    newGameButton.addEventListener('click' , function(e){
        // reset all variable
        randomNumber = parseInt(Math.random() * 100 + 1);
        // reset prevguess
        // prevGuess = [];
        // reset numberguess
        numGuess = 1;
        // empty guessslot
        guessSlot.innerHTML = '';
        // change rem chances to reset
        remaining.innerHTML = `${11 - numGuess}`;
        // remove the disable attribute from userinput
        userInput.removeAttribute('disabled'); //spelling disabled hoga dhyan rakhna
        // end game jo child add kiya tha osko remove kro
        startOver.removeChild(p);
        // make the playgame true
        playGame = true; 
    })
}
