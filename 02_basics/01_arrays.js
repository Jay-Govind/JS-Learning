// +++++++++++++++ Array +++++++++++++++

const myArr = [1, 2, 3, 4, 5];
const myArr2 = new Array(1, 2, 3, 4, 5);

// console.log(myArr);
// console.log(myArr2);
// console.log(myArr[2]);  // --> 2nd Index (value 3)


// +++++++++++++++ Array Method +++++++++++++++

// myArr.push(6);
// console.log(myArr);     // --> [ 1, 2, 3, 4, 5, 6 ] (add to last)

// myArr.pop();
// console.log(myArr);     // --> [ 1, 2, 3, 4 ] (remove from last)

// myArr.unshift(6);
// console.log(myArr);     // --> [ 6, 1, 2, 3, 4, 5 ] (add to first)

// myArr.shift();
// console.log(myArr);     // --> [ 2, 3, 4, 5 ] (remove from starting)

// console.log(myArr.includes(8));     // --> false
// console.log(myArr.indexOf(8));      // --> -1 (value does not exist)

// console.log(myArr.slice(1,3))       // --> [ 2, 3 ]
// console.log(myArr);                 // --> [ 1, 2, 3, 4, 5 ]

// console.log(myArr.splice(1,3))      // --> [ 2, 3, 4 ] 
// console.log(myArr);                 // --> [ 1, 5 ]
/*  slice method provide desired value from the original array without changing the original array 
      splice method provide desired value from the original array and change the original array */


// myArr = [1, 2, 3, 4, 5]; declared in 3rd line

// let newArr = myArr.join();
// console.log(myArr);                // --> type is array
// console.log(newArr);               // --> type is string