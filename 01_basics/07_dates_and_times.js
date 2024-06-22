//Dates

// let myDate = new Date();
// console.log(myDate.toString());             // -- >Wed Apr 10 2024 09:22:42 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());         // --> Wed Apr 10 2024
// console.log(myDate.toISOString());          // --> 2024-04-10T09:29:00.533Z
// console.log(myDate.toJSON());               // --> 2024-04-10T09:29:00.533Z
// console.log(myDate.toLocaleDateString());   // --> 4/10/2024
// console.log(myDate.toLocaleString());       // --> 4/10/2024, 9:29:00 AM
// console.log(myDate.toLocaleTimeString());   // --> 9:29:00 AM
// console.log(myDate.toTimeString());         // --> 09:29:00 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString());          // --> Wed, 10 Apr 2024 09:29:00 GMT
// console.log(myDate.getTimezoneOffset());    // --> 0
// console.log(myDate.getHours());             // --> 9
// console.log(myDate.getMonth());             // --> 3

// let myCreatedDate = new Date(2024, 0, 16);
// console.log(myCreatedDate.toDateString());     // --> Wed Jan 16 2024

// let myCreatedDate2 = new Date("2024-01-16");
// console.log(myCreatedDate2.toDateString());    // --> Wed Jan 16 2024

/* Months are from 0 to 11(Jan-Dec) if we declare as 0 but it starts from 1 to 12 (Jan-Dec) if we declare dates as string */

// let myCreatedDate3 = new Date("06-16-2024");
// console.log(myCreatedDate3.toLocaleString());    // --> Wed Jun 16 2024

/* ++++++++++++++++++++++++++++++++++++  TimeStamp  ++++++++++++++++++++++++++++++++++++ */

let myTimeStamp = Date.now();
// console.log(myTimeStamp);                          // --> 1650131200000 miliseconds
// console.log(Math.floor(myTimeStamp/1000));         // --> 1650131200 seconds

/* Output of time is always is in miliseconds */

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);                 // +1 is used to avoid 0 index (1-12)
// console.log(newDate.getDay());                       // 6 as Saturday

// String interpolation using backticks
// console.log(`The date is ${newDate.toDateString()}`);

console.log(newDate.toLocaleDateString("default", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}));                                                    // --> Saturday, June 22, 2024
