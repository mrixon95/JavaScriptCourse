// ******** index.js ********
 /*
    map() = performs a function for each element in the array
    and stores the returned values in a new array
 */

let storeUSD = [5,6,7,8,9];

function toEuros(value) {
    value *= 0.85;
    return value;
}

console.log(storeUSD.map(toEuros));
