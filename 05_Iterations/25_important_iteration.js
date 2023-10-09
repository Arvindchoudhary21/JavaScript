// // iterate on arrays of objects using foreach loop
const myCoding = [
    {
        languageName : "cpp",
        languagefilename : ".cpp"
    },
    {
        languageName : "java",
        languagefilename : ".java"
    },
    {
        languageName : "javascript",
        languagefilename : ".js"
    },
    {
        languageName : "python",
        languagefilename : ".py"
    },
];

// myCoding.forEach( (it) => {
//     console.log(it.languageName);
//     console.log(it.languagefilename);
// } )
// // simple just use the for each loop and iterate on array of objects 



// also you can iterate to objects using foreach so dekho for of se object nhi ho 
// pa rha tha for in se iterate ho rha tha but foreach se dono object and array iterate
// ho jayega so yhi use krna better hoga 
const obj = {
    username : "arvind",
    location : "kolkata" 
}
Object.keys(obj).forEach( (key) => {
    // console.log(key , obj[key]);
} )



