const user = {
    name : "jay govind",
    age : 20,
    
    welcomeMessage : function() {
        console.log(`${this.name}, Welcome to JS`);
        console.log(this);
    }
}

// user.welcomeMessage();  // --> jay govind, Welcome to JS
// user.name = "Govind";
// user.welcomeMessage();  // --> Govind, Welcome to JS


// Due to this keyword we can access the properties of the object in the function
/*
jay govind, Welcome to JS
{
  name: 'jay govind',
  age: 20,
  welcomeMessage: [Function: welcomeMessage]
}
Govind, Welcome to JS
{ name: 'Govind', age: 20, welcomeMessage: [Function: welcomeMessage] }
*/



// console.log(this);      // --> {}

/* if we use this last line in chrome console, then it will print the window object. */


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function one() {
//     console.log(this);
// }
// one();

/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: value],
  crypto: [Getter]
}
 */



// const one = function() {
//     username : "Govind",
//     console.log(this.username);
// }
// one();      // --> undefined




// Arrow function
// const one = () => {
//     username : "Govind",
//     console.log(this);              // --> {}
//     console.log(this.username);     // --> undefined
// }
// one(); 




// const one = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(one(1, 2));     // --> 3


// const one = (num1, num2) => (num1 + num2);
// console.log(one(1, 2));        // --> 3

/* Last two arrow functions are same, but the last one is shorter.
If we don't use parentheses, it is not necessary to write return keyword */