// Polymorphism examples

class Person {
    sleep(): void {
        console.log('Sleeps 8 hours a day');
    };
};

class StudentPerson extends Person {
    sleep(): void {
        console.log('Sleeps 6 hours a day');
    };
};

class CoderPerson extends Person {
    sleep(): void {
        console.log('Sleeps 5 hours a day');
    };
};

function getSleep(parameter: Person): void {
    parameter.sleep();
};

const person1 = new Person();
const person2 = new StudentPerson();
const person3 = new CoderPerson();

getSleep(person1);
getSleep(person2);
getSleep(person3);



class Shape {
    getArea(): number {
        return 0;
    };
};

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    };

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    };
};

class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
        super();
        this.height = height;
        this.width = width;
    };

    getArea(): number {
        return this.width * this.height;
    };
};

function getAreaOfShape(parameter: Shape): void {
    console.log(parameter.getArea());
};

getAreaOfShape(new Circle(10));
getAreaOfShape(new Rectangle(10, 12));
