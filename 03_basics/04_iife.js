// iife - immediately invoked function expression
/* it is used to avoid polluting global scope */

(function connection() {
  console.log("DB Connected");
})();


(() => {
  console.log("DB Connected");
})();


((name) => {
    console.log(`Hello ${name}`);
  })("Govind");


  /* output :
  DB Connected
  DB Connected
  Hello Govind
  */