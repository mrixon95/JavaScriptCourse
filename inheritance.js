// inhertiance

// inheritance is useful for code reusability. Reuse properites and methods of an existing class. 
// Children classes inherit from parent classes.

// child classes inherit from common ancester
// child classs can have their own unique properties and methods

class Animal {
    constructor() {
        this.alive = true;
    }
    eat() {
        console.log("This animal is eating");
    }
}

class Rabbit extends Animal {

    run() {
        console.log("The rabbit is running");
    }

}

class Fish extends Animal {

    swim() {
        console.log("The fish is swimming");
    }
}

class Hawk extends Animal {

    fly() {
        console.log("The hawk is flying");
    }

}


let rabbit = new Rabbit();
let fish = new Fish();
let hawk = new Hawk();

rabbit.run();

