// ******** index.js ********
/*
    A function is a block of code designed to 
    perform a particular task or procedure

    We invole "call" whenever we want to do something/
    We need to define what we want task to do
*/

function toCelsuis(f) {
    var result = (f-32) * (5/9);
    return result;
}

function toFarenheit(f) {
    var result = (c * 9/5) + 32
    return result;
}

console.log(toFarenheit(100));