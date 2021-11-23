// ******** index.js ********

// Math.random() = generates a psuedo-random number between 0 and 1
// Don't use this for security purposes


var randNum;


function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}

randNum = getRandomNum(1,6);
console.log(randNum);