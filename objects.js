
// ********* index.js *******
// object = a container for properties/methods
// property = value or variable that describes what an object has
// methods = functions that describe what an object can do

var human1 = {

    name: "Rick",
    age: 65,

    eat : function() {
        console.log("Rick is eating food");
    },

    drink : function() {
        console.log("Rick is drinking alcohol");
    },

    sleep : function() {
        console.log("Rick has passed out");
    }
}

console.log(human1['name']);


var human2 = {

    name: "Morty",
    age: 16,

    eat : function() {
        console.log("Morty is eating food");
    },

    drink : function() {
        console.log("Morty is drinking alcohol");
    },

    sleep : function() {
        console.log("Morty has passed out");
    }
}

console.log(human1['name']);
human2.drink();
