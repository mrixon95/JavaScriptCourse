// ******** index.js ********
/*
    Why use getters and setters?

    a way to get/set the properties of an object
    secures better data quality
    does extra things behind the scenes
*/

class User {

    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    set first(value) {
        this.firstName = value.toUpperCase();
    }

    set last(value) {
        this.lastName = value.toUpperCase();
    }

    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}


user1 = new User("Spongebob", "Squarepants");

console.log(user1)