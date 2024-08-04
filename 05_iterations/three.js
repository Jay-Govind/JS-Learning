// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = ["jay", "govind", "kumar"];

for (const name of arr) {
    // console.log(name);
    
}


const string = "jay govind kumar";

for (const element of string) {
    // console.log(element);    
}




// Maps

const map = new Map ();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('UK', "United Kingdom");
map.set('IN', "India");     // --> overwrite, because key is same

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, '=>', value);
}






// const obj = {
//     'game1' : 'cricket',
//     'game2' : 'football',
//     'game3' : 'hockey'
// }

// for (const [key, value] of obj) {
//     console.log(key, '=>', value);
    
// }

// --> error, bcoz obj is not iterable