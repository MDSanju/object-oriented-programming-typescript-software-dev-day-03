"use strict";
// Polymorphism examples
class Person {
    sleep() {
        console.log('Sleeps 8 hours a day');
    }
    ;
}
;
class StudentPerson extends Person {
    sleep() {
        console.log('Sleeps 6 hours a day');
    }
    ;
}
;
class CoderPerson extends Person {
    sleep() {
        console.log('Sleeps 5 hours a day');
    }
    ;
}
;
function getSleep(parameter) {
    parameter.sleep();
}
;
const person1 = new Person();
const person2 = new StudentPerson();
const person3 = new CoderPerson();
getSleep(person1);
getSleep(person2);
getSleep(person3);
class Shape {
    getArea() {
        return 0;
    }
    ;
}
;
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    ;
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    ;
}
;
class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    ;
    getArea() {
        return this.width * this.height;
    }
    ;
}
;
function getAreaOfShape(parameter) {
    console.log(parameter.getArea());
}
;
getAreaOfShape(new Circle(10));
getAreaOfShape(new Rectangle(10, 12));
