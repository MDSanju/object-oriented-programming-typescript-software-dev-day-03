class Parent {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  makeSleep(hours: number): string {
    return `${this.name} sleeps ${hours} hours a day!`;
  }
}

class Student extends Parent {
  whichClass: number;

  constructor(name: string, age: number, address: string, whichClass: number) {
    super(name, age, address);
    this.whichClass = whichClass;
  }

  classHours(time: string): string {
    return `${this.name} takes classes ${time} a day!`;
  }
}

const student1 = new Student("John", 23, "California", 12);
console.log(student1.makeSleep(6));
console.log(student1.classHours("from 11am to 5pm"));

class Teacher extends Parent {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  teachingArea(subject: string): string {
    return `${this.name} teaches ${subject}!`;
  }
}

const teacher1 = new Teacher("Bob", 49, "Washington", "Lecturer");
console.log(teacher1.teachingArea('Math'));
