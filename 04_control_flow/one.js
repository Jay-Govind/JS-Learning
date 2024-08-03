// if ()

if (true) {
  // Execute
}

if (false) {
  // Not Execute
}




// let score = 100;

// if (score > 90) {
//   console.log("Excellent");
// }




// let temperature = 32;

// if ( temperature > 30) {
//   console.log("Hot");
// } else {
//   console.log("Cold");
// }




// let marks = 90;
// if (marks >= 90) console.log("Excellent"), console.log("Very Good");

/* Not a good practice to write all console statement in one line */



// ++++++++++++++++++++++++++ else if  +++++++++++++++++++++++++++++

// let price = 1200;

// if (price < 500) {
//   console.log("Price is too low");
// } else if (price < 750) {
//   console.log("Price is good");
// } else if (price < 1000) {
//   console.log("Price is excellent");
// } else {
//   console.log("Price is too high");
// }




// ++++++++++++++++++++++++++ nested if  +++++++++++++++++++++++++++++

const isLoggedInFromGoogle = true;
const isLoggedInFromEmail = false;
const isLoggedIn = true;
const isDebitCard = true;

if ( isLoggedInFromGoogle || isLoggedInFromEmail ) {
  if (isLoggedIn && isDebitCard) {
    console.log("You can buy the product");
  }
}