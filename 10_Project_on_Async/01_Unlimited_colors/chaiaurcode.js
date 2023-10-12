//!need to generate random color
const randomColor = function () {
    const hex = '0123456789ABCDEF'; //!THIS IS THE RANGE OF COLORS 0-9 AND A-F
    let color = '#';
    // !so from hex 6 values uthana hai wahi permutation dega color ka 
    // !pick 6 random values from hex string
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]; //!+1nhi kiya kiuki 0th index bhi choose kr sakta hu
    }
    return color;
}
console.log(randomColor()); //!yes random color mil gya 
// !add setinterval and it will automatically change background color
let refernce;
function startchanging() {
    if (!refernce) {
        refernce = setInterval(changecolor, 1000);
        const text = document.getElementById('check');
        text.innerHTML = 'Already Started';
    }
    
    function changecolor() {
        document.body.style.backgroundColor = randomColor();
    }
}

// !add clearInterval to stop changing the background color
function stopchanging() {
    clearInterval(refernce);
    refernce = null;
    const text = document.getElementById('check');
    text.innerHTML = 'Yet to start';
}

document.getElementById('start').addEventListener('click', startchanging);
document.getElementById('stop').addEventListener('click', stopchanging);