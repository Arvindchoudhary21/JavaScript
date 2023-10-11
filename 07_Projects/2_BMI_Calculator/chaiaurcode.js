// so ye form hai so yha click nhi yha submit wala
// event lagega ok
const form = document.querySelector('form');
// now ab form me pura form stored hai

// this usecase will give empty value in the height variable
// const height = parseInt(document.querySelector('#height').value);

// ab ek submit ka event lagana hoga with callback function
form.addEventListener('submit', function (e) {
  e.preventDefault();
  // jo default action hai submit wala wo stop kro uper
  // wala code ka ye meaning hai ok kiuki form to server par submit hota hai
  // so wo sab operation nhi krna hai so isiliye wo sab operations ko prevent kro

  // ab values chahiye height and weight
  // ye .value function yad rakhna aise hi kam krta hai for input elements dekho html me hai
  // values string me milti hai so isko humlogo ko integer me convert krna hoga 
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  // result to bas ek element hai so isko bhi store kro simply and isme hi answer store krna hai
  const results = document.querySelector('#results');
  const results2 = document.querySelector('#results2');
  // if (height === '' || height < 0 || isNaN(height)) {
  //   results.innerHTML = `Please enter valid height`;
  // } else if (weight === '' || weight < 0 || isNaN(weight)) {
  //   results.innerHTML = `Please enter valid weight`;
  // } else {
  //   const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  //   // tofixed hai ki decimal ke bad sirf 2 value ayega ok and simple
  //   // formula hai bmi calculate krne ka ok
  //   // ab bmi ko result me add kr do
  //   results.innerHTML = `<span>${bmi}</span>`;
  //   // simple result me add ho gya
  // }
  // ye jyada simple hai uper wala bhi simple hai but ye jyada simple hai  
  if(height && weight)
  {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    let text = "";
    if(bmi <= 18.6){
      text = "You are under weight";
    }
    else if(bmi >= 18.6 && bmi <= 24.9){
      text = "You are in normal weight";
    }
    else{
      text = "You are over weight";
    }
    results2.innerHTML = text;
  }
  else{
    results.innerHTML = `Please enter valid weight`;
  }
});
    