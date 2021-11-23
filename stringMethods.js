// ******** index.js ********

// useful string properties and methods

var myName = "Michael Rixon";
var myPhone = "123-456-7890";
console.log(myName.length);
console.log(myName.charAt(1));
console.log(myName.indexOf('o'));
console.log(myName.lastIndexOf('o'));
console.log(myName.trim());

var firstName = myName.slice(0,myName.indexOf(" "));
var lastName = myName.slice(myName.indexOf(" ") + 1, myName.length);

console.log(lastName);
myPhone = myPhone.replaceAll("-","");
console.log(myPhone);