// ******** index.js ********

// Closure is a function with preserved data
// It gives you access to an outer function's scope from an inner function

// State of variables in outer scope are "saved"

// Variables in outer scope scope are considered "private"

// let points = 0;

// let score = function() {

//     let points = 0;

//     return function() {
//         points += 1;
//         return points;
//     }
// }();

// console.log(score());
// console.log(score());
// console.log(score());



function makeSize(size) {
    return function() {
        document.body.style.fontSize = size + "px";
    }

}

function makeFont(font) {
    // closures maintain data stored within
    return function() {
        document.body.style.fontFamily = font;
    }

}


let size20 = makeSize(20);
let size30 = makeSize(30);
let size40 = makeSize(40);

size20();

let fontInkFree = makeFont("Ink Free");
let fontConsolas = makeFont("consolas");
let fontCourierNew = makeFont("Courier New");

fontInkFree();
fontConsolas();
// fontCourierNew();
