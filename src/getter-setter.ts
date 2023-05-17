// Getter & setter examples

class Laptop {
    readonly brand: string;
    private _price: number;
    color: string;
    private _generation: number;
    private _installment: number;

    constructor(brand: string, price: number, color: string, _generation: number, _installment: number) {
        this.brand = brand;
        this._price = price;
        this.color = color;
        this._generation = _generation;
        this._installment = _installment;
    };

    // Getter
    get price(): number {
        return this._price;
    };

    // Setter
    set payment(amount: number) {
        this._price = this._price - amount;
    };

    askPrice() {
        console.log(`Price is ${this._price}`);
    };
};

const myLaptop = new Laptop('Dell', 56000, 'Black', 11, 5000);

console.log(myLaptop.price);
myLaptop.payment = 4000;
console.log(myLaptop.price);


