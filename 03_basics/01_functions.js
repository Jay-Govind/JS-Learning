// function name () {
//       console.log("J");
//       console.log("a");
//       console.log("y");
//       console.log(" ");
//       console.log("G");
//       console.log("o");
//       console.log("v");
//       console.log("i");
//       console.log("n");
//       console.log("d");
// } name();



// function add ( number1, number2 ) {       // --> parameters
//       console.log(number1 + number2);     // --> 5
// } 
// const sum = add(2, 3);        // --> arguments
// console.log(`Results are ${sum}`);  // --> undefined
/* Function does not return any value, if we don't write return statement */



// function loginUsername (user = "Unknown Coder") {
//       if (!user) {
//             console.log("First Enter your name");
//             return;
//       }
//       return `${ user } just logged in`;
// }

// console.log(loginUsername("jay govind"));    // --> jay govind just logged in
// console.log(loginUsername());                // --> Unknown Coder just logged in



function calculateCardPrice(...price) {    // --> rest operator (depend on place of usage)
      return price;
}
// console.log(calculateCardPrice(100, 200, 300, 400, 500));   // --> return an array



// --> object in function
const user = {
      username: "Govind",
      price: 199
}

function handleObject(anyObj) {
      console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}
// handleObject(user);
// handleObject( { username: "Jay Govind", price: 299 } );


// --> array in function
const arr = [1, 2, 3, 4, 5];

function getThirdElement(getArr){
      return getArr[2];
}

console.log(getThirdElement(arr));
console.log(getThirdElement([20, 45, 62, 85, 45]));