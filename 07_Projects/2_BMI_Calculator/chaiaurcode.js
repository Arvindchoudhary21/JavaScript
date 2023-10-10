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
  // wala code ka ye meaning hai ok

  // ab values chahiye height and weight
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter valid height`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // tofixed hai ki decimal ke bad sirf 2 value ayega ok and simple
    // formula hai bmi calculate krne ka ok
    // ab bmi ko result me add kr do
    results.innerHTML = `<span>${bmi}</span>`;
    // simple result me add ho gya
  }
});
    