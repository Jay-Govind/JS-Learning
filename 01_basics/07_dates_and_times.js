//Dates

let myDate = new Date();
console.log(myDate.toString());             // -- >Wed Apr 10 2024 09:22:42 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());         // --> Wed Apr 10 2024
console.log(myDate.toISOString());          // --> 2024-04-10T09:29:00.533Z    
console.log(myDate.toJSON());               // --> 2024-04-10T09:29:00.533Z
console.log(myDate.toLocaleDateString());   // --> 4/10/2024
console.log(myDate.toLocaleString());       // --> 4/10/2024, 9:29:00 AM
console.log(myDate.toLocaleTimeString());   // --> 9:29:00 AM
console.log(myDate.toTimeString());         // --> 09:29:00 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString());          // --> Wed, 10 Apr 2024 09:29:00 GMT
console.log(myDate.getTimezoneOffset());    // --> 0
console.log(myDate.getHours());             // --> 9
console.log(myDate.getMonth());             // --> 3