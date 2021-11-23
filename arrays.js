// ******** index.js ********
/*
    array = a special variable
    that can hold more than one value

    Each space is known as an element
    You access elements in an array by referring to the index number ex.[0]
*/

var cars = ["Mustang", "Corvette", "Jaguar"]

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

cars = cars.sort();
cars = cars.reverse();

console.log(cars[cars.length-1]);