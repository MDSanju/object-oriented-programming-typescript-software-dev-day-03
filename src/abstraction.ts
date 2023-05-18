// Abstraction examples

// Interface way

interface IVehicle {
    startEngine(): void;
    stopEngine(): void;
    move?(): void;
}

class Vehicle implements IVehicle {
    constructor(
        public name: string,
        public model: number,
        public brand: string,
    ) {};

    startEngine(): void {
        console.log('Starting...');
    };

    stopEngine(): void {
        console.log('Stopping...');
    };

    // Optional
    // move(): void {
    //     console.log('Moving...');
    // };

    // Extra method can be used
    speed(speed: number): string {
        return `${speed}km`;
    };
};

const vehicle1 = new Vehicle('Car', 2010, 'Ferrari');


// Abstract class

abstract class Mobile {
    constructor(
        public brand: string,
        public model: number,
    ) {};

    abstract price(): void;

    abstract batteryHealth(): void;

    abstract display(): void;
};

// Child class

class Apple extends Mobile {
    price(): void {
        console.log('Price: $1800 USD');
    };

    batteryHealth(): void {
        console.log('Battery Health: 99%');
    };

    display(): void {
        console.log('Display: Super Amoled');
    };
};
