const name = "Jay Govind";
const age = 20;

//console.log("Hello ! My name is " + name + " and I am " + age + " year's old");
// Prefer not to use because use of many + symbols to concatinate

//use Backticks (`...`) and ${}
//console.log(`Hello ! My name is ${name} and I am ${age} year's old`);


/****** String Methods ******/
const gameName = new String("Jay Govind");
//string is a type of object

// console.log(gameName[0]);               // --> zero index --> J
// console.log(gameName.__proto__);        // --> {} empty

// console.log(gameName.length);            // --> length 10
// console.log(gameName.toUpperCase());     // --> JAY GOVIND
// console.log(gameName.charAt(4));         // --> G
// console.log(gameName.indexOf("n"));      // --> 7
// console.log(gameName.substring(0, 4));   // --> Jay
// console.log(gameName.slice(-10, 4));     // --> Jay

const newName = "       Jay Govind      ";
// console.log(newName);
// console.log(newName.trim());    //-->It is used to remove the space from before and after the string

// const url = "https://govind.com/jay%20govind";
// console.log(url.replace('%20', '-'));       // -->https://govind.com/jay-govind
// console.log(url.includes("govind"));        // -->true


// const newName1 = "jay-govind-kumar";
// console.log(newName1.split('-'));          // -->[ 'jay', 'govind', 'kumar' ]
