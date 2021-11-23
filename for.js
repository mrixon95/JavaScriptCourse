// ****** index.js ******

// for loop = repeat a loop a limited amount of times
// for (declare index, condition, step)

// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }

let letters = ["H", "E", "L", "P"];

// for (let i = 0; i < letters.length; i++) {
//     console.log(i);
// }

for (let i in letters) {
    console.log(i);
}


let Car = {
    make: "Chevy",
    model: "Corvette",
    year: 2022,
    color: "blue"
}