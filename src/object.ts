class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}
  makeSound() {
    console.log(`The ${this.name} says ${this.sound}!`);
  }
}

const dog = new Animal("German Shepard", "Dog", "woof woof");
const cow = new Animal("Australian cow", "Cow", "moo moo");

dog.makeSound();
cow.makeSound();
