// for in loop

const myObj ={
    js : 'JavaScript',
    py : 'Python',
    cpp : 'C++',
    java : 'Java',
    rb : 'Ruby',
    swift : "swift by apple"
}

for (const key in myObj) {
    // console.log(`${key} is shortcut for ${myObj[key]}`);
    
}





const programing = ["js", "py", "cpp", "java", "rb", "swift"];

for (const key in programing) {
    // console.log(`${key} is key for ${programing[key]}`);
    
}





// Maps

const map = new Map ();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('UK', "United Kingdom");
map.set('IN', "India");

for (const key in map) {
    // console.log(key);     // --> maps is not iterable so we can't use for in loop
}