"use strict";
// Getter & setter examples
class Laptop {
    constructor(brand, price, color, _generation, _installment) {
        this.brand = brand;
        this._price = price;
        this.color = color;
        this._generation = _generation;
        this._installment = _installment;
    }
    ;
    // Getter
    get price() {
        return this._price;
    }
    ;
    // Setter
    set payment(amount) {
        this._price = this._price - amount;
    }
    ;
    askPrice() {
        console.log(`Price is ${this._price}`);
    }
    ;
}
;
const myLaptop = new Laptop('Dell', 56000, 'Black', 11, 5000);
console.log(myLaptop.price);
myLaptop.payment = 4000;
console.log(myLaptop.price);
