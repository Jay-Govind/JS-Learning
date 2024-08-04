// for each loop

const coding = ["js", "ruby", "python", "java", "swift"];

coding.forEach( function (item) {
    // console.log(item);
} )


coding.forEach( (item) => {
    // console.log(item);
} )


// function myFunc(item) {
//     console.log(item);
// }

// coding.forEach(myFunc);     // dont write `myFunc()` here



coding.forEach( (item, index, array) => {
    // console.log(item, index, array);
} )
// --> for each loop will take 3 arguments





const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js",
    },
    {
        languageName : "ruby",
        languageFileName : "rb",
    },
    {
        languageName : "python",
        languageFileName : "py",
    },
    {
        languageName : "java",
        languageFileName : "java",
    },
    {
        languageName : "swift",
        languageFileName : "swift",
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
    
} )