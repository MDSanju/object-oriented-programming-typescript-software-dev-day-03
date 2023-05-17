"use strict";
class Animal {
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}!`);
    }
}
const dog = new Animal("German Shepard", "Dog", "woof woof");
const cow = new Animal("Australian cow", "Cow", "moo moo");
dog.makeSound();
cow.makeSound();
