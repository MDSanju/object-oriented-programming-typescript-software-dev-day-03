"use strict";
// Abstraction examples
class Vehicle {
    constructor(name, model, brand) {
        this.name = name;
        this.model = model;
        this.brand = brand;
    }
    ;
    startEngine() {
        console.log('Starting...');
    }
    ;
    stopEngine() {
        console.log('Stopping...');
    }
    ;
    // Optional
    // move(): void {
    //     console.log('Moving...');
    // };
    // Extra method can be used
    speed(speed) {
        return `${speed}km`;
    }
    ;
}
;
const vehicle1 = new Vehicle('Car', 2010, 'Ferrari');
// Abstract class
class Mobile {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    ;
}
;
// Child class
class Apple extends Mobile {
    price() {
        console.log('Price: $1800 USD');
    }
    ;
    batteryHealth() {
        console.log('Battery Health: 99%');
    }
    ;
    display() {
        console.log('Display: Super Amoled');
    }
    ;
}
;
