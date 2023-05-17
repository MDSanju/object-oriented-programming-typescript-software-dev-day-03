"use strict";
class Parent {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours) {
        return `${this.name} sleeps ${hours} hours a day!`;
    }
}
class Student extends Parent {
    constructor(name, age, address, whichClass) {
        super(name, age, address);
        this.whichClass = whichClass;
    }
    classHours(time) {
        return `${this.name} takes classes ${time} a day!`;
    }
}
const student1 = new Student("John", 23, "California", 12);
console.log(student1.makeSleep(6));
console.log(student1.classHours("from 11am to 5pm"));
class Teacher extends Parent {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    teachingArea(subject) {
        return `${this.name} teaches ${subject}!`;
    }
}
const teacher1 = new Teacher("Bob", 49, "Washington", "Lecturer");
console.log(teacher1.teachingArea('Math'));
