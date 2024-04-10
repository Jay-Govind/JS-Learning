//DataType Summary

// ************* Primitive ***************
// 7 Types: String, Number, Boolean, Undefined, Null, Symbol, BigInt

const score = 100;
const scoreValue = 100.12;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
/// id != anotherId

const bigInt = 545678557545757n;


// ********** Reference (Non Primitive) ***********
// Array, Objects, Functions

const heros = [ "shaktiman", "naagraj", "doga"];

let muyObj = {
    name: "Jay Govind",
    age: 20,
}

const myFunction = function () {
    console.log("Hello ! It's me Govind");
}

// use typeOf() function to print the type of data types