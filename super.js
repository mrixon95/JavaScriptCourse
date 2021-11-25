// super = reference to the parent class (super class). Very similar to the this keyword
// can use a super classes constructor and methods

class Person {

    constructor(name, age) {
        this.age = age;
        this.name = name;
    }

    welcome() {
        console.log("Hello", this.name);
        console.log("You are", this.age, "years old");
    }
}

class Student extends Person {

    constructor(name, age, gpa) {
        super(name, age);
        this.gpa = gpa;
    }

    hello() {
        super.welcome();
        console.log("Your gpa is ", this.gpa);
    }

}


class Teacher extends Person {

    constructor(name, age, classSize) {
        super(name, age);
        this.classSize = classSize;
    }

}


let student = new Student("Steve", 21, 2.0);
let teacher = new Teacher("Bob", 45, 30);

console.log(student);
console.log(teacher);