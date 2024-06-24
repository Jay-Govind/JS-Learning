//______________Lecture 1 of Javascript_____________

// let name = "Jay Govind";
// console.log(name.length);
// console.log(name[0]);
// console.log(name[name.length-1]);
// console.log("apnacollege"+123);
// let str = " ";
// console.log(str.length);

//______________Lecture 2 of Javascript_____________

//Practice Questions
// Q.No.1 (traffic light system using if statement)
// let light = prompt("Enter the light color (red, yellow or green): ");
// if (light === "red") {
//    console.log("Stop") ;
// }
// if (light === "yellow") {
//     console.log("Slow Down") ;
// }
//  if (light === "green") {
//     console.log("Go") ;
// }

// Q.No.2 (Calculate Popcorn Price)
// let size = prompt("Enter the size of Popcorn (XL, L, M, S): ")
// if (size === "XL") {
//     console.log("Your Popcorn Price is $250");
// } else if (size === "L") {
//     console.log("Your Popcorn Price is $200");
// } else if (size === "M") {
//     console.log("Your Popcorn Price is $100");
// } else if (size === "S") {
//     console.log("Your Popcorn Price is $50");
// }

// Q.No.3 (Name is good or Bad using nested if )
// let name = prompt("Emter your name: ");
// if (name[0] === "a" || name[0] === "A") {
//     if (name.length > 3) {
//         console.log("Your name is a Good String");
//     } else {
//         console.log("Your name is not a Good String");
//     }
// } else {
//     console.log ("Your name is a Bad String");
// }

// Q.No.4 (traffic light system using switch statement)
// let light = prompt("Enter the light color (red, yellow or green): ");
// switch (light) {
//     case "red" :
//         console.log("Stop");
//         break;
//     case "yellow" :
//         console.log("Slow Down");
//         break;
//     case "green" :
//         console.log("Go");
//         break;
//     default :
//         console.log("Unwanted Input");
// }

// Q.No.5 (Print Day by Number using switch statement)
// let day = prompt("Enter a number(1-7): ");
// switch (day) {
//     case "1" :
//         console.log("Monday");
//         break;
//     case "2" :
//         console.log("Tuesday");
//         break;
//     case "3" :
//         console.log("Wednesday");
//         break;
//     case "4" :
//         console.log("Thursday");
//         break;
//     case "5" :
//         console.log("Friday");
//         break;
//     case "6" :
//         console.log("Saturday");
//         break;
//     case "7" :
//         console.log("Sunday");
//         break;
//     default :
//         console.log("Unwanted Input");
// }

//********Assignment Questions (Lecture 2)********

// Q No. 1
// let num = parseInt(prompt("Enter a number: "));
// if (num % 10 === 0) {
//       console.log("Good");
// } else {
//       console.log("Bad");
// }

// Q No.2
// let name = prompt("Enter your name: ");
// let age = parseInt(prompt("Enter your age: "));
// alert(`Hello ${name}, you are ${age} years old.`);

// Q.No.3
// let quater = prompt("Enter a number for quater (1-4): ");
// switch (quater) {
//       case "1" :
//             console.log(`January\nFebruary\nMarch`);
//             break;
//       case "2" :
//             console.log(`April\nMay\nJune`);
//             break;
//       case "3" :
//             console.log(`July\nAugust\nSeptember`);
//             break;
//       case "4" :
//             console.log(`October\nNovember\nDecember`);
//             break;
//       default:
//             console.log("Wrong Input");
// }

// Q.No.4
// let name = prompt("Emter your name: ");
// if (name[0] === "a" || name[0] === "A") {
//     if (name.length > 5) {
//         console.log("Golden String");
//     } else {
//         console.log("Not a Golden String");
//     }
// } else {
//     console.log ("Not a Golden String");
// }

// Q.No.5
// let num1 = parseInt(prompt("Enter a number: "));
// let num2 = parseInt(prompt("Enter another number: "));
// let num3 = parseInt(prompt("Enter another number: "));
// if (num1 > num2) {
//       if (num1 > num3) {
//             console.log(`${num1} is greater`);
//       } else {
//             console.log(`${num3} is greater`);
//       }
// } else if (num2 > num3) {
//       console.log(`${num2} is greater`);
// } else {
//       console.log(`${num3} is greater`);
// }

// Q.No.6
// let num1 = parseInt(prompt("Enter a number: "));
// let num2 = parseInt(prompt("Enter another number: "));
// if (num1[num1.length1] === num2[num2.length2]) {
//       console.log("Same Last Digit");
// } else {
//       console.log("Not Same Last Digit");
// }

//______________Lecture 3 of Javascript_____________

// Practice uestions
// Q.No.1 (trim and uppercase)
// let msg = `help`;
// console.log(msg.trim().toUpperCase());

//Arrays
// let fruits = ["apple", "mango", "banana"];
// console.log(fruits);
// fruits[0] = "orange";
// console.log(fruits);
// console.log(fruits[0][0]);

// let names = ["Jay", "Govind", "Raj"];
// console.log(names);
// names.push("Saurya");
// console.log(names);
// names.pop();
// console.log(names);
// names.shift("");
// console.log(names);
// names.unshift("Raj");
// console.log(names);

//Q.No.2
// let months = ["January", "July", "March", "August"];
// console.log(months);
// months.shift();
// months.shift();
// months.unshift("July", "June")
// console.log(months);

// months.splice(0, 2,"July", "June");
// console.log(months);

//Q.No.3
// let lang = ["c", "c++", "javascript", "python", "java", "c#", "sql"];
// console.log(lang.reverse().indexOf("javascript"));

//********Assignment Questions (Lecture 3)********

//Q.No.1 (Find first n elements of the array)
// let arr = [];
// let total = parseInt(prompt("Enter how many elements you want to store: "));
// for ( let i=0; i<total; i++) {
//       arr[i] = prompt(`Enter the ${i+1} element: `);
// }
// console.log(arr);
// let slice = parseInt(prompt("Enter how many elements you want to print: "));
// console.log(arr.slice(0, slice));

//Q.No.2 (Find last n elements of the array)
// let arr = [];
// let total = parseInt(prompt("Enter how many elements you want to store: "));
// for ( let i=0; i<total; i++ ) {
//       arr[i] = prompt(`Enter the ${i+1} element: `);
// }
// console.log(arr);
// let slice = parseInt(prompt("Enter how many elements you want to print: "));
// console.log(arr.slice(-slice));

//Q.No.3 (Cjheck the string is empty or not)
// let str = prompt("Enter a string: ");
// if ( str.length === 0) {
//       console.log("String is empty");
// } else {
//       console.log("String is not empty");
// }

//Q.No.4 (whether the character at the given (character) index is lowercase)
// let str = prompt("Enter a string: ");
// let index = parseInt(prompt("Enter the index: "));
// if ( str[index] === str[index].toLowerCase()) {
//       console.log("Lowercase");
// } else {
//       console.log("Not Lowercase");
// }

//Q.No.5 (strip leading and trailing spaces from a string)
// let str = prompt("Enter a string: ");
// console.log(`original string = ${str}`);
// console.log(`stripped string = ${str.trim()}`);

//Q.No.6 (check if elements exists in an array or not)
// let arr =[];
// let total = parseInt(prompt("How many elements you want to add:"));
// for ( let i=0; i<total; i++ ){
//       arr[i] = prompt(`Enter the ${i+1} element: `);
// }
// console.log(arr);
// let check = prompt("Enter the element you want to check: ");
// if ( arr.indexOf(check) != -1 ) {
//       console.log("Element exists");
// } else {
//       console.log("Element does not exist");
// }

//______________Lecture 4 of Javascript (Loops)_____________

//Practice Qusetions
//Q.No.1(Table of n)
// let n = parseInt(prompt("Enter a number: "));
// for ( let i=1; i<=10; i++) {
//       console.log(`${i} * ${n} = ${i*n}`);
// }

//Q.No.2 (Guess Favourite Movie)
// const fav = "3 idiots";
// let guess = prompt("Enter your favourite movie (Enter 'quit' for exit): ");
// while (true) {
//       if (guess == fav) {
//             console.log("Congratulations! You guessed it right");
//             break;
//       } else if (guess == "quit") {
//             console.log("You have exited");
//             break;
//       } else {
//             guess = prompt("Try again (Enter 'quit' for exit): ");
//       }
// }

//Q.No.3 (Loops with nested array)
// let students = [
//       ["Jay Govind", 23, "Male"],
//       ["Sakshi", 22, "Female"]
// ]
// for ( let i=0; i<students.length; i++) {
//       for ( let j=0; j<students[i].length; j++) {
//             console.log(i, students[i][j]);
//       }
// }

//Q.No.4 (Nested for-of-loop)
// let students = [
//       ["Jay Govind", 23, "Male"],
//       ["Sakshi", 22, "Female"]
// ]
// for ( student of students) {
//       for ( detail of student) {
//             console.log(detail);
//       }
// }

//Q.No.5
// let todo = [];
// let req = prompt("Enter your request: ");

// while (true) {
//       if (req == "quit") {
//             console.log("You quit");
//             break;
//       }
//       if ( req == "list") {
//             console.log("-------------------");
//             for (task of todo) {
//                   console.log(task);
//             }
//             console.log("-------------------");
//       } else if ( req == "add") {
//             let task = prompt("Enter your task: ");
//             todo.push(task);
//             console.log("task added");
//       }
//       req = prompt("Enter your request: ");
// }

//********Assignment Questions (Lecture 4)********

//Q.No.1 (Delete n elements from last from an array)
// let arr = [];
// let total = parseInt(prompt("How many elements you want to add:"));
// for ( let i=0; i<total; i++ ){
//       arr[i] = prompt(`Enter the ${i+1} element: `);
// }
// console.log(`Original array : ${arr}`);
// let n = parseInt(prompt("Enter the number of elements you want to delete: "));
// for ( let i=0; i<n; i++ ){
//       arr.pop();
// }
// console.log(`New array : ${arr}`);

//Q.No.2 (Find number of digit in a number)
// let number = prompt("Enter your number: ");
// console.log(number.toString().length);;

//Q.No.3 (find the sum of digits in a number)
// let num = parseInt(prompt("Enter your number: "));
// let sum = 0;
// while (num > 0) {
//       sum += num % 10;
//       num = parseInt(num/10);
// }
// console.log(sum);

// Q.No.4 (Find the factorial of a number n)
// let num = parseInt(prompt("Enter your number: "));
// let fact = 1;
// for ( let i=1; i<=num; i++ ) {
//       fact = fact*i;
// }
// console.log(`Factorial of ${num} is ${fact}`);

//Q.No.5 (largest number in an array)
// let arr = [];
// let n = parseInt(prompt("How many elements you want to add in array: "));
// for ( let i=0; i<n; i++ ){
//       arr[i] = prompt(`Enter the ${i+1} element: `);
// }
// let max = arr[0];
// for ( let i=0; i<n; i++ ){
//       if ( arr[i] > max ) {
//             max = arr[i];
//       }
// }
// console.log(`Maximun number is ${max}`);

//______________Lecture 5 of Javascript (Object Literals)_____________

//Practice Qusetions
//Q.No.1 (Post Thread)
// const post = {
//       username: "__siya__751",
//       content: "beauty queen",
//       reposts: 5,
//       like: "1K",
//       tag: ["aashu_751", "devwithgovind"]
// }
// console.log(post);

//Q.No.2 (Guessing Game)
// let num = parseInt(prompt("Enter the maximun number: "));
// console.log(`Max number is ${num}`);

// const random = Math.floor(Math.random() * num) + 1;
// let guess = parseInt(prompt("Guess the number: "));

// while (true) {
//       if (guess == "quit") {
//             console.log("user quit");
//             break;
//       }

//       if (guess == random) {
//             console.log("Congratulations! Your guess is right.");
//             break;
//       } else {
//             guess = prompt("Your guess is wrong! Please try again");
//       }
// }

//********Assignment Questions (Lecture 5)********

//Q.No.1 (Generates a random number representing a dice roll.)
// console.log(Math.floor(Math.random()*6+1));

//Q.No.2 (Create object for Car)
// const car = {
//       name: "audi",
//       model: "Q7",
//       color: "black",
//       engine: "2.0"
// }
// console.log(`Car's name id ${car.name}`)

//Q.No.3 (Create object for Person)
// const person = {
//       name: "Jay Govind Kumar",
//       age: 20,
//       city: "Arrah"
// }
// console.log(person);
// person.city = "New York";
// console.log(person);
// person.country = "United States";
// console.log(person);

//______________Lecture 6 of Javascript (Functions)_____________

//Practice Questions
// //Q.no.1 (Average of three numbers)
// function average (a, b, c) {
//       let avg = (a+b+c)/3;
//       console.log (avg);
// }
// average(4,5,6);

//Q.No.2 (Sum upto n terms)
// function sum (n){
//       let sum = 0;
//       for (let i=1; i<=n; i++) {
//             sum += i;
//       }
//       console.log(sum);
// }

// let n = parseInt(prompt("Enter a number: "));
// sum(n);

//Q.No.3 (Concatenate the strngs)
// let arr = [];
// let num = prompt("How namy strings you want to add: ");
// for ( let i=1; i<=num; i++) {
//       let str = prompt("Enter a string: ");
//       arr.push(str);
// }
// concat(arr);
// function concat (arr) {
//       let result = "";

//       for ( let i=0; i<arr.length; i++) {
//             result += arr[i];
//       }
//       console.log(result);
// }

//********Assignment Questions (Lecture 6)********

//Q.No.1 (Function that returns array elements larger than a number)
// let arr =[];
// let n = parseInt(prompt("How namy elements you want to add: "));
// for ( let i=0; i<n; i++) {
//       let num = parseInt(prompt("Enter a number: "));
//       arr.push(num);
// }
// console.log(arr);
// let find = parseInt(prompt("Enter a number: "));
// getElements(arr, find);
// function getElements (arr, find) {
//       let result = [];
//       for ( let i=0; i<arr.length; i++) {
//             if ( arr[i] > find ) {
//                   result.push(arr[i]);
//             }
//       }
//       console.log(result);
// }

//Q.No.2 (Function to extract unique characters from a string)
// let str = prompt("Enter a string: ");
// let result = "";

//Q.No.3 (Function that accepts a list of country names as input and returns the longest country name as output)
// let arr = [];
// let n = parseInt(prompt("How namy elements you want to add: "));
// for ( let i=0; i<n; i++) {
//       arr[i] = prompt("Enter a country name: ");
// }
// console.log(arr);
// greatest(arr);
// function greatest() {
//       let max = arr[0].length;
//       for ( let i=0; i<n; i++ ) {
//             if ( arr[i].length > max ){
//                   max = arr[i];
//             }
//       }
//       console.log(max);
// }

//Q.No.4 (Function to count the number of vowels)
// let str = prompt("Enter a string: ");
// countVowel(str);
// function countVowel(str) {
//       let count = 0;
//       for ( let i=0; i<str.length; i++ ) {
//             if ( str[i] == "a" ||
//                   str[i] == "e" ||
//                   str[i] == "i" ||
//                   str[i] == "o" ||
//                   str[i] == "u" ||
//                   str[i] == "A" ||
//                   str[i] == "E" ||
//                   str[i] == "I" ||
//                   str[i] == "O" ||
//                   str[i] == "U") {
//                   count++;
//             }
//       } console.log(count);
// }

//Q.No.5 (Random number within a range)
// let start = parseInt(prompt("Enter a start number: "));
// let end = parseInt(prompt("Enter a end number: "));
// console.log(Math.floor(Math.random() * (end - start + 1)) + start);

//********Assignment Questions (Lecture 7)********

//Q.No.1 (Arrow function which return average of the numbers in an array)
// let arr =[];
// let n = parseInt(prompt("How namy elements you want to add: "));
// for ( let i=0; i<n; i++) {
//       arr[i] = parseInt(prompt("Enter a number: "));
// }
// const getAverage = (arr) => {
//       let sum = 0;
//       for ( let i=0; i<n; i++ ) {
//             sum += arr[i];
//       }
//       let average = sum/n;
//       console.log(`The average of the given array is ${average}`);
// }
// getAverage(arr);

//Q.No.2 (Check even or odd)
// const even = (a) => a%2 == 0;

//______________Lecture 8 of Javascript (Functions)_____________

//Practice Questions
//Q.No.1 (Find Max in array using reduce function)
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = arr.reduce( ( max, el ) => {
//       if ( max > el ) {
//             return max;
//       } else {
//             return el;
//       }
// });
// console.log(result);

//Q.No.2 (Multiple of 10)
// const arr = [];
// let total = (parseInt(prompt("How many numbers you want to store: ")));
// //loop for input in array
// for ( let i=0; i<total; i++) {
//       let num = parseInt(prompt("Enter a number: "));
//       arr.push(num);
// }
// console.log(arr);
// let check = arr.every(el => el % 10 === 0);
// console.log(check);
// check = arr.filter( el => el % 10 === 0);
// console.log(check);

//Q.No.3 (Find Min in array using reduce function)
// const arr = [];
// let total = (parseInt(prompt("How many numbers you want to store: ")));
// for ( let i=0; i<total; i++) {
//       let num = parseInt(prompt("Enter a number: "));
//       arr.push(num);
// }
// console.log(arr);
// let min = arr.reduce( (min, el) => {
//       if ( min < el ) {
//             return min;
//       } else {
//             return el;
//       }
// });
// console.log(`Minimum is ${min}`);

//Q.No.4 (Default parameter)
// function add ( a,b=4) {
//       return a+b;
// }
// console.log(add(5));

//Q.No.5 (spread)
// function spread (arr) {
//       console.log(...arr);
// }
// spread(1,2,3,4,5,6,7,8,9,10);

//********Assignment Questions (Lecture 8)********

//Q.No.1 (Square and Sum of the array using arrow function also find average of the array)
// let arr =[];
// let n = parseInt(prompt("How namy elements you want to add: "));
// for ( let i=0; i<n; i++) {
//       arr[i] = parseInt(prompt("Enter a number: "));
// }
// let square = arr.map(el => el*el);
// console.log(`Square of the array is ${square}`);
// let sum = arr.reduce( (add, el) => add+el, 0);
// console.log(`Sum of the array is ${sum}`);
// let average = sum/n;
// console.log(`Average is ${average}`);

//Q.No.2 (Create a map function to increase the length of the array to the given number)
// let arr = [];
// let n = parseInt(prompt("How many elements you want to add: "));
// for ( let i=0; i<n; i++) {
//       arr[i] = prompt(`Enter the ${i+1} element: `);
// }
// let increaseNum = parseInt(prompt("Enter a number: "));
// let result = arr.map( el => parseInt(el)+increaseNum);
// console.log(`New array is ${result}`);

//Q.No.3 (Change the array in UPPERCASE)
// let arr = [];
// let n = parseInt(prompt("How many elements you want to add: "));
// for ( let i=0; i<n; i++) {
//       arr[i] = prompt(`Enter the ${i+1} element: `);
// }
// console.log(`Original array is ${arr}`);
// console.log(`UPPERCASE Array is ${arr.map( el => el.toUpperCase())}`);

// Q.No.4 ()
// const doubleAndReturnArgs =  (arr, ...args) => [
//       arr, ...args.map((n) => n*2)
// ];

//Q.No.5
// const mergeObjects = ( obj1, obj2 ) => ( { ...obj1, ...obj2 } );

//______________Lecture 11 of Javascript_____________

//Visualizing Call Stack
// function one() {
//       return 1;
// }

// function two() {
//       return one() + one();
// }

// function three() {
//       let ans = two() + one();
//       console.log(ans);
// }
// three();

//CallBack Hell
// let h1 = document.querySelector("h1");

// function changecolor (color, delay, nextColor ) {
//       setTimeout( () => {
//             h1.style.color = color;
//             if (nextColor) nextColor();
//       }, delay)
// }

// changecolor ("red", 1000, () => {
//       changecolor ("blue", 1000, () => {
//             changecolor ("orange", 1000, () => {
//                   changecolor ("green", 1000, () => {
//                         changecolor ("purple", 1000);
//                   });
//             });
//       });
// });

//Callback Chaining
// function saveToDb(data, success, failure) {
// 	let internetSpeed = Math.floor(Math.random() * 10) + 1;
// 	if (internetSpeed > 3) {
// 		success();
// 	} else {
// 		failure();
// 	}
// }

// saveToDb(
// 	"Jay Govind",
// 	() => {
// 		console.log("Data1 saved successfully");
// 		saveToDb(
// 			"Raj",
// 			() => {
// 				console.log("Data2 saved successfully");
// 				saveToDb(
// 					"Anaya",
// 					() => {
// 						console.log("Data3 saved successfully");
// 						saveToDb(
// 							"Saurya",
// 							() => {
// 								console.log("Data4 saved successfully");
// 							},
// 							() => {
// 								console.log("Data4 failed to save");
// 							}
// 						);
// 					},
// 					() => {
// 						console.log("Data3 failed to save");
// 					}
// 				);
// 			},
// 			() => {
// 				console.log("Data2 failed to save");
// 			}
// 		);
// 	},
// 	() => {
// 		console.log("Data1 failed to save");
// 	}
// );

// then() and catch() method
// function saveToDb(data) {
// 	return new Promise((resolve, reject) => {
// 		let internetSpeed = Math.floor(Math.random() * 10) + 1;
// 		if (internetSpeed > 3) {
// 			resolve("Success ! Data saved successfully");
// 		} else {
// 			reject("Failed !! Data is failed to saved");
// 		}
// 	});
// }

// saveToDb("Jay Govind")
// 	.then((result) => {
// 		console.log("Promise is resolved", result);
// 		// console.log(request);
// 	})
// 	.catch((error) => {
// 		console.log("Promise is rejected", error);
// 		// console.log(request);
// 	});

//Promise Chaining (Improved version)
// function saveToDb(data) {
// 	return new Promise((resolve, reject) => {
// 		let internetSpeed = Math.floor(Math.random() * 10) + 1;
// 		if (internetSpeed > 3) {
// 			resolve("Success");
// 		} else {
// 			reject("failure:");
// 		}
// 	});
// }

// saveToDb("Jay Govind")
// 	.then(() => {
// 		console.log("Data1 saved successfully");
// 		return saveToDb("Raj");
// 	})
// 	.then(() => {
// 		console.log("Data2 saved successfully");
// 		return saveToDb("Saurya");
// 	})
// 	.then(() => {
// 		console.log("Data3 saved successfully");
// 		return saveToDb("Anaya");
// 	})
// 	.catch(() => {
// 		console.log("Data failed to save");
// 	});

//Promise Chaining (Improved version 2) But it is also consodered as callback hell
// saveToDb("Jay Govind")
// 	.then(() => {
// 		console.log("Data1 saved successfully");
// 		saveToDb("Raj").then(() => {
// 			console.log("Data2 saved successfully");
// 			saveToDb("Anaya").then(() => {
// 				console.log("Data3 saved successfully");
// 				saveToDb("Saurya").then(() => {
// 					console.log("Data4 saved successfully");
// 				});
// 			});
// 		});
// 	})
// 	.catch(() => {
// 		console.log("Data failed to save");
// 	});

//Change color using Promise Chaining (Avoid Callback Hell)
// h1 = document.querySelector("h1");
// function changeColor(color, delay) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			h1.style.color = color;
// 			resolve("color changed");
// 		}, delay);
// 	});
// }
// changeColor("red", 1000)
// 	.then(() => {
// 		console.log("Color changed successfully");
// 		return changeColor("green", 1000);
// 	})
// 	.then(() => {
// 		console.log("Color changed successfully");
// 		return changeColor("blue", 1000);
// 	})
// 	.then(() => {
// 		console.log("Color changed successfully");
// 		return changeColor("pink", 1000);
// 	})
// 	.then(() => {
// 		console.log("Color changed successfully");
// 		return changeColor("yellow", 1000);
// 	})
// 	.then(() => {
// 		console.log("Color changed successfully");
// 		return changeColor("purple", 1000);
// 	})
// 	.then(() => {
// 		console.log("Color changed successfully");
// 	})
// 	.catch(() => {
// 		console.log("Color not changed");
// 	});

//async function
// let h1 = document.querySelector("h1");
// function changeColor (color, delay) {
//       return new Promise ( (resolve, reject) => {
//             setTimeout(() => {
//                   h1.style.color = color;
//                   console.log(`color changed to ${color}`);
//                   resolve("color changed");
//             }, delay);
//       });
// }
// async function demo () {
//       await changeColor("red", 1000);
//       await changeColor("green", 1000);
//       await changeColor("blue", 1000);
//       await changeColor("pink", 1000);
//       await changeColor("yellow", 1000);
//       await changeColor("purple", 1000);
// }
// demo()

// };
// // console.log(student.getname());
// // console.log(student.getmarks());
// console.log(student.getinfo1());

// let url = "https://catfact.ninja/fact";
// fetch(url)
// 	.then((res) => {
// 		return res.json();
// 	})
// 	.then((data) => {
// 		console.log(data.fact);
// 		return fetch(url);
// 	})
// 	.then((res) => {
//             return res.json();
// 	})
// 	.then ((data) => {
// 		console.log(data.fact);
// 	})
// 	.catch ( (err) => {
// 		console.log(`Error - ${err}`);
// 	});

let url = "https://catfact.ninja/fact";
let btn = document.querySelector("button");
let p = document.querySelector("#fact");

btn.addEventListener("click", async () => {
	let fact = await getFacts();
	console.log("facts");
	p.innerHTML = fact;
});
async function getFacts() {
	try {
		let res = await axios.get(url);
		return res.data.fact;
	} catch (e) {
		console.log("error - ", e);
	}
}