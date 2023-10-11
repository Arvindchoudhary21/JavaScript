// queryselector bhi use kr skte ho and also
// getelementbyid bhi use kr sakte ho
// const clock = document.querySelector('#clock');
const clock = document.getElementById('clock');

// get date
// const date = new Date();
// to get only time use tolocaletimestring
// console.log(date.toLocaleTimeString()); //ye time dega

// so we want ki time hamesa update hota hi rhe
// matlab ek bar ka time dikha ke wahi stop na ho jaye ok

// so use setinterval for this kiuki 1 sec ke interval par
// code run hota rhe ok(1000ms == 1sec)
setInterval(function () {
  const date = new Date();
  // date mil gya ab time nikalo dat se
  const currTime = date.toLocaleTimeString();
  // ad add kr do clock me is currtime ko
  clock.innerHTML = currTime;
}, 1000);
