// ******** index.js ********

// modify HTML elements
// document.getElementById() (older)
// document.querySelector() (newer, more powerful)

const div = document.querySelector("#myDiv");

div.style.width = "200px";
div.style.height = "200px";
div.style.backgroundColor = "grey";

// listen for a type of event to occur
div.addEventListener("contextmenu", e => {
    console.log(e);
    div.style.backgroundColor = "green"
});


// listen for a type of event to occur
div.addEventListener("mouseover", e => {
    console.log("You entered the square!");
    div.style.backgroundColor = "purple"
});

div.addEventListener("mouseleave", e => {
    console.log("You left the square!");
    div.style.backgroundColor = "grey"
});