// for loop

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if ( element == 5 ) {
//         console.log("Five Found");
        
//     }
//     console.log(element);
// }




// for (let i = 0; i < 5; i++) {
//     console.log(`outer loop : ${i}`);

//     for (let j = 0; j < 5; j++) {
//        console.log(`inner loop : ${j} and outer loop : ${i}`);
    
//     }
// }




// for (let i = 1; i <= 10; i++) {
//     console.log(`outer loop : ${i}`);

//     for (let j = 1; j <= 10; j++) {
//        console.log(`${i} * ${j} = ${i * j}`);

//     }
// }




// break and continue

for (let index = 0; index < 20; index++) {
    if (index == 5) {
        console.log("Five Found");
        break;
    }

    console.log(`index : ${index}`);
}
// break if 5 is found


for (let index = 0; index < 20; index++) {
    if (index == 5) {
        console.log("Five Found");
        continue;
    }

    console.log(`index : ${index}`);
}
// continue if 5 is found i.e ignore 5