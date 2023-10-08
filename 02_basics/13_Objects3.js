// method to directly acces an element of object 
const course = {
    Name : "js course",
    price : 99,
    teacher : "hitesh",
}
// now to access Name we can wriet 
console.log(course.Name);
// but if we want to print Name again and again then create an variable of name 
const {Name : n} = course; // khud ke hisab se value bhi de sakte hai
console.log(n); //so we can do this to print this and use this again and again