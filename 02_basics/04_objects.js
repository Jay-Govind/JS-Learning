// const tindeUser = new Object()  // -->Singleton Object
const tinderUser = {};             // --> not a singleton object

tinderUser.id = "123abc";
tinderUser.name = "Jay Govind";
tinderUser.age = 20;

// console.log(tinderUser);

const regularUser = {
      email: "someone@anjaan.com",
      fullname: {
            userfullName: {
                  firstName: "Jay",
                  lastName: "Govind"
            }
      }
}

// console.log(regularUser.fullname.userfullName.firstName);   // --> Jay



const obj1 = { 1: "a", 2: "b", 3: "c", 4: "d" };
const obj2 = { 5: "e", 6: "f", 7: "g", 8: "h" };

// const obj3 = { obj1, obj2};   // --> two objects print inside new obj, not merge
// const obj3 = Object.assign({},obj1, obj2);      // --> correct way to merge 
const obj3 = {...obj1, ...obj2};    // --> most used method
// console.log(obj3);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("email"));      // --> false



// +++++++++++++++++++++++++ De-Structuring ++++++++++++++++
const course = {
      courseName: "JS",
      price: 999,
      courseinstructor: "Jay Govind"
}

const {courseinstructor: tea} = course;   // --> de-structure the name
console.log(tea);    