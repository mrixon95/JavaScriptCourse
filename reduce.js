// ******** index.js *********

// reduce() = reduces an array to a single value
// The return value of the callback function is the accumulated
// result and is provided as an argument in the next call to the callback function

let letters = ["H", "E", "L", "P"];

// accumulator, value are needed.
function combineLetters(total, nextLetter) {
    return total + nextLetter;
}
// the return value will be used for the
// next iteration of combined letters



let word = letters.reduce(combineLetters);

console.log(word);