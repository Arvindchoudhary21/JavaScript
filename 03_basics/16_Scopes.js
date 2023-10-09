var c = 300;
if (true) {
    c = 3;    
}
console.log(c);
//this is the problem of the var so please ignore this kiuki ye scope ke andar bhi
// changes le leta hai and fir problem create krta hai
// but ye problem let me nhi hota so use let ok




// ************************intersting
// functions 
function addone(num)
{
    return num+1;
}
addone(5); //isko function ke uper bhi rakh do to bhi error nhi ayega run krega

const addtwo = function(num)
{
    return num + 2;
}
addtwo(5); // but isko addtwo function ke uper le jane se hi error dega kiuki jo 
// variable hai addtwo wo uper me define hi nhi hai to fir value accept kaise krega