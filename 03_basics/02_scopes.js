// if (true) {
//     let a = 100;
//     const b = 200;
//     var c = 300;
//     console.table([a,b,c]);     // block scope
// }

// /* If we want to print all the variables a, b and c, then it should not be printed because it is declared in the if block but there is a problem encountered that (c) will be printed outside the if block - which is not good */

// console.log(c);

//--------------------------------
let a = 100;
const b = 200;
var c = 300;
if (true) {
  console.table([a, b, c]);
}

/* here a, b and c are declared in global scope, so they will be printed either inside or outside any block. We can also initialise them in the if block also */
