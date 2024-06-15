const accountId = 43743284;
let accountName =  "Jay govind";
var accountEmail = "govind@google.com";
let accountState;       // undefined

/* prefer not to use var because of issue with block scope and functional scope, use let  */

console.table([accountId, accountEmail, accountName, accountState]);