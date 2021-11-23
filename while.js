// ******  index.js  ******

// while loop = repeats some code while the loop's condition remains true

// Your computer has a virus

var creditNum = window.prompt("Your computer has a virus!");
while (creditNum == "") {
    creditNum = window.prompt("Your computer has a virus!");
}
console.log("Thanks. Your computer no longer has a virus")