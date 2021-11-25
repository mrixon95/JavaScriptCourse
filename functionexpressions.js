/* function expression */

// sayHello();

// function sayHello() {
//     console.log("hello");
// }

// /* function expression */
// // let greeting = function() {
// //     console.log("hello");
// // }

// let greeting = function() {
//     document.getElementById("myH1").innerHTML = "Hey there"; 
// }


// output(greeting);

// function output(func) {
//     func();
// }

let greeting = "Hey man";

outputWebsite(greeting);

function outputConsole(x){

    console.log(x);
}

function outputWebsite(x){

    document.getElementById("myH1").innerHTML = x;
}
