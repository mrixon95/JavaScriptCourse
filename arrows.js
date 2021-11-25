// ******** index.js ********

// arrow function => shortcut for a function expression
// let hello;

// function expression
// hello = function() {
//     return "Hello world!";
// }
// console.log(hello())

// arrow function


// hello = () => "Hello World!";
// hello = x => x + "World!";
// hello = (x,y) => x + " " + y;
// hello = (x,y) => {
//     x + " " + y;
// };
// console.log(hello());


// let storeUSD = [5,6,7,8,9];

// let storeEUR;

// storeEUR = storeUSD.map(
//     value => {
//     value *= 0.84;
//     return value;
// }
// );
// console.log(storeEUR);


// let students = [16,17,18,19,20];

// let adultStudents;

// adultStudents = students.filter(age => age >= 18);
// console.log(adultStudents);


// let letters = [4, 2, 9, 5];

// let word;

// function combineLetters(total, nextLetter) {
//     return total + nextLetter;
// }

// word = letters.reduce( (total, nextLetter) => total + nextLetter);

// console.log(word);


let numbers = [3,4,1,2,5];

numbers.sort((x,y) => y-x);

console.log(numbers);