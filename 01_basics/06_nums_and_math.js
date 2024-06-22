/* ++++++++++++++++++++++++++++++++++++  Numbers +++++++++++++++++++++++++++++++++++++ */

// const score = 100;
// console.log(score);                         // --> 100

// const balance = new Number(123.5);
// console.log(balance);                       // --> [Number: 100]
// console.log(balance.toString());            // --> 100
// console.log(balance.toString().length);     // --> 3
// console.log(balance.toFixed(2));            // --> 100.00


// const otherNum = 23.454565;
// console.log(otherNum.toPrecision(3));       // --> 23.5


// const rupee = 1000000;
// console.log(rupee.toLocaleString('en-In')); // -->10,00,000



/* ++++++++++++++++++++++++++++++++++++  Maths  ++++++++++++++++++++++++++++++++++++ */

// console.log(Math);                  // --> Object [Math] {}
// console.log(Math.abs(-4));          // --> 4
// console.log(Math.round(4.6));       // --> 5
// console.log(Math.ceil(4.2));        // --> 5 --> nearest upper integer
// console.log(Math.floor(4.6));       // --> 4 --> nearest lower integer
// console.log(Math.min(4, 6, 5, 8));  // --> 4
// console.log(Math.max(4, 6, 5, 8));  // --> 8

// console.log(Math.random());             // --> (0-1) '1 is excluded'
// console.log(Math.random() * 10);        // --> (0-10) '10 is excluded
// console.log((Math.random() * 10) + 1);    // --> (1-10)
// console.log(Math.floor(Math.random() * 10) + 1);


const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min );