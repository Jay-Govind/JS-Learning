// if (true) {
//     let a = 100;
//     const b = 200;
//     var c = 300;
//     console.table([a,b,c]);     // block scope
// }

// /* If we want to print all the variables a, b and c, then it should not be printed because it is declared in the if block but there is a problem encountered that (c) will be printed outside the if block - which is not good */

// console.log(c);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
let a = 100;
const b = 200;
var c = 300;
if (true) {
  // console.table([a, b, c]);
}

/* here a, b and c are declared in global scope, so they will be printed either inside or outside any block. We can also initialise them in the if block also */

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function one() {
  let username = "Govind";
  function two() {
    let website = "Youtube";
    console.log(username + " " + website);
  }
  two();
  // console.log(website);    --> give error  (website is not defined), it is defined only in function two
}

// console.log(username);   --> give error  (username is not defined), it is defined only in function one

one(); // call the function

// ++++++++++++++++++++++++ Interesting Concept +++++++++++++++++++++
console.log(addtwo(10));
function addtwo(num) {
  return num + 2;
}

console.log(addtwo(10)); // this will give error, bcoz function is not defined
const result = function addTwo(num) {
  return num + 2;
};

/* we can call the function before defining it, if the function is defined in the global scope.
But we can't call the function before defining it, if it is defined in the local scope i.e stored inside a variable */

// this is closure concept and function hoisting