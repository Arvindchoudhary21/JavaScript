// so first we have to select all the buttons ok
const buttons = document.querySelectorAll('.button');
// console.log(buttons);
// it will store a nodelist ok

// also store the body ok
const body = document.querySelector('body');

// now iterate over all the buttons and kiuki nodelist
// store hai buttons me so ispe humlog foreach loop laga
// sakte hai
buttons.forEach(function (button) {
  // check ki kya kya button me aa rha hai
  // console.log(button); //html span element mil rha so ok hai

  // now ab button par ka click event ko humlog ko
  // dekhna hai and osko use krna hai
  button.addEventListener('click', function (e) {
    // console.log(e); // it tells ki kon sa event ho rha like
    // yha par pointer event ho rha jab tum click kr rhe ho
    // kisi bhi color par
    // console.log(e.target); // ye bata rha hai ki jo tum
    // click kr rhe ho color wo kaha se aa rha like kon sa
    // button tum click kr rhe ho iska to info chahiye hi
    // nhi to verify kaise kroge ki kon sa button click
    // kiye to tum ok
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
      // id same color ka hi name hai so tum e.target.id
      // isko likh do color ka name mat likho to bhi chalega
    } else if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
