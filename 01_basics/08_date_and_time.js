// dates
const myDate = new Date();
console.log(typeof myDate); //prints the date but ye object hai
console.log(myDate.toString());//acha se print kr rha with time #string
console.log(myDate.toDateString());//only prints date not the time #string
console.log((myDate.toLocaleString())); // 10/8/2023, 11:16:15 AM #string
// note -> sab string value return kr rhe ok but first wala object hai


// to create a custom date 
const newDate = new Date(2023, 0, 15); //15 jan 2023
console.log(newDate.toDateString());
const newDate1 = new Date(2023, 0, 15, 6, 2);
console.log(newDate1.toLocaleString()); //print with time  
const newDate2 = new Date("06-18-2023"); // another way first=month then date then year
console.log(newDate2.toLocaleString());




// date.now
// The Date.now() static method returns the number of milliseconds elapsed since the 
// epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.

const mytimestamp = Date.now();
console.log(mytimestamp);
console.log(newDate2.getTime());//time form 1 jan 1970 to newdate2 ok
// Date.now give in milisecond so to convert in seconds divide by 1000
console.log(Math.floor(mytimestamp / 1000)); //in seconds

// so date ke bohot method hai jisse tum present day ka month kya hai jan sakte ho
// by getMonth() yhi sb aur bhi hai so yad rakhna bas



// we can do things with tolocalestring ok
newDate.toLocaleString('default', {
    weekday: "long" // means ki ab jan nhi january print hoga ok 
})