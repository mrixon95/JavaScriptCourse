
// A class is a blue print for creating objects.
// Define properties and/or methods
// methods are functions that belong to an object
// constructor automatically called when creating an object
// the static keyword means that the method or property belongs to a class and not any one object

// class Car {

//     constructor(make, model, year, color) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }
//     drive() {
//         console.log("You drive the car");
//     }

//     brake() {
//         console.log("You step on the brake");
//     }

//     whatIsThis() {
//         return this;
//     }


// }

// let car1 = new Car("Ford", "Mustang", 2022, "red");
// let car2 = new Car("Chevy", "Corvette", 2021, "blue");

// console.log(car1.whatIsThis());
// console.log(car2.whatIsThis());

// // this refers to the window object
// console.log(this)

// Math.round() is a static method
// Math.PI is a static property


class Car {

    static numberOfCars = 0;
    constructor(model) {
        this.model = model;
        Car.numberOfCars += 1;
    }
    static beginRace() {
        console.log("The race has begun!");
    }


}

let car1 = new Car("Mustang");
let car2 = new Car("Corvette");
let car3 = new Car("Challenger");

console.log(Car.numberOfCars);
Car.beginRace();