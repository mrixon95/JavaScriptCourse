// ******** index.js ********

// modify HTML elements
// document.getElementById() (older)
// document.querySelector() (newer, more powerful)

document.querySelector("#myButton").onclick = function() {

    // matches with first element of the same name
    const h1 = document.querySelector("#myH1");
    const underline = document.createElement("u");

    underline.innerText = "Bye World!"
    h1.append(underline);

    const p = document.querySelectorAll(".myP");
    p.forEach(element => element.innerText = "WHOA!");

    const buttons = document.querySelectorAll("button");
    buttons.forEach(element => element.remove());

}
