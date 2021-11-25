// ****** index.js ******

// filter() = returns the element of an array that meets a condition specified
// in a function

let cart = [16, 17, 18, 19, 20];

function checkAge(age) {
    if (age >= 18) {
        return true;
    }
    return false;
}

let newCart = cart.filter(checkAge);
console.log(newCart);