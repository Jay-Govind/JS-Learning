// singleton  --> when we create using constructor
// Object.create  // we can create object also with this syntax

// object literals

const mySym = Symbol("Key1");

const jsUser = {
      name: "Jay",
      "full name": "Jay Govind Kumar",
      [mySym]: "Value1",
      age: 22,
      email: "govind@google.com",
      location: "India",
      isLogged: false,
      lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser["email"]);
// console.log(jsUser.full name);     // --> error (we can't access with dot)
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

/* correct way to access the value of objects is to use square backets instead of dot because (dot) method falis to return the value in the case of string as a key*/

/* syntax for declare symbol is by using square brackets [] without using bracket it is considerd as string */


// jsUser.email = "govind@microsoft.com";
// console.log(jsUser["email"]);       // --> email: govind@microsoft.com

// Object.freeze(jsUser);
// jsUser.email = "govind@chatgpt.com";
/* this line does not execute and dont show any error.
      this is done only if we apply freeze method to our object*/



// jsUser.greeting = function () {
//       console.log("Hello ! It's me Coder")
// }

// console.log(jsUser.greeting);       // --> [Function (anonymous)]
// console.log(jsUser.greeting());     // --> Hello ! It's me Coder

// jsUser.greeting2 = function () {
//       console.log(`Hello ! ${this["full name"]} It's me Coder`)
// }                     //  --> Hello ! Jay Govind Kumar It's me Coder

// console.log(jsUser.greeting2());