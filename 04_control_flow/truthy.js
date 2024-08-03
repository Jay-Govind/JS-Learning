// const email = "jay@govind.ai";

// if (email) {
//     console.log("Got the email");
// } else {
//     console.log("Didn't get the email");
// }

// falsy values 

// false, 0, -0, 0n, BigInt, "", null, undefined, NaN 


// Truthy values

// "0", "false", " ", [], {}, function(){}


// const arr = [];

// if ( arr.length === 0 ){
//     console.log("Array is empty");
// }


// const obj = {};

// if ( Object.keys(obj).length === 0 ){
//     console.log("Object is empty");
// }




// Nullish coalescing operator (??) : if the value is null or undefined then return another value

let val1;
let val2;
let val3;

val1 = 5 ?? 10;
val2 = null ?? 10;
val3 = undefined ?? 5 ?? 10;

// console.log(val1);      // --> 5
// console.log(val2);      // --> 10
// console.log(val3);      // --> 5



// +++++++++++++++++++++ ternary Operator +++++++++++++++++++++++++++++

const price = 10;

price > 5 ? console.log("We will buy") : console.log("We will not buy");
