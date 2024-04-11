const marvel_heroes = ["Spiderman", "Ironman", "Hulk", "Thor", "Captain America"];
const dc_hero = ["Batman", "Superman", "Flash", "Green Lantern"];

// marvel_heroes.push(dc_hero);
// console.log(marvel_heroes);

// Output
// [
//   'Spiderman',      
//   'Ironman',        
//   'Hulk',
//   'Thor',
//   'Captain America',
//   [ 'Batman', 'Superman', 'Flash', 'Green Lantern' ]
// ]


// Concat Method
// const allHero = marvel_heroes.concat(dc_hero);
// console.log(allHero);


// Spread Method
// const allHero2 = [...marvel_heroes, ...dc_hero];
// console.log(allHero2);

// Output
// [
//       'Spiderman',      
//       'Ironman',        
//       'Hulk',
//       'Thor',
//       'Captain America',
//       'Batman',
//       'Superman',       
//       'Flash',
//       'Green Lantern'   
// ]


// Flat Method
// const newArray = [1, 2, 3, [4, 5, 6], [7, 8, 9, [10, 11, 12]]];
// console.log(newArray.flat(Infinity));

// Output 
// [ 1,  2, 3, 4,  5, 6,  7, 8, 9, 10, 11, 12]


//(isArray, .From, .of) Methods
// console.log(Array.isArray("Jay Govind"));       // --> false

// console.log(Array.from("Jay Govind"));          
// --> ['J', 'a', 'y', ' ', 'G', 'o', 'v', 'i', 'n', 'd']

// console.log(Array.from({ f_name: "Jay", l_name: "Govind"})); // Interesting
// --> return empty array
// Note: if we pass an object it will return an empty array. So we need tell it to return an array on the basis of particular property

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));  // --> [ 100, 200, 300 ]