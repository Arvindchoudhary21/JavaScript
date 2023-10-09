// iterate on arrays of objects using foreach loop
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

myCoding.forEach( (it) => {
    console.log(it.languageName);
    console.log(it.languagefilename);
} )
// simple just use the for each loop and iterate on array of objects 
