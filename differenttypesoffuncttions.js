// ******** index.js ********

// anonymous function = Function w/o a name
// Often not accessible after its initial creation

// benefits = doesn't clutter global namespace
// useable once
// can be passed as arguments
// Immediately Invoked Function Expression = a JS function that runs as soon as it is defined
// grouping operator = ()

// IIFE = a JS function that runs as soon as it is defined
// grouping operator = ()

// immediately calls this expression when it reaches this line
// (function() {
//     document.getElementById("myH1").innerHTML = "hey!";
// })();

// setTimeout(function, milliseconds);

// let task = function() {
//     document.getElementById("myH1").innerHTML = "sup!";
// }

// setTimeout(task, 2000);

setTimeout(function() {
    document.getElementById("myH1").innerHTML = "sup!";
}, 2000);