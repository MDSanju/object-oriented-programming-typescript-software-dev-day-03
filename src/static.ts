// Static class example

class Counter {
    static counter: number = 0;

    static increment(): number {
        return Counter.counter = Counter.counter + 1;
    };

    static decrement(): number {
        return Counter.counter = Counter.counter - 1;
    };
};

// No need instance after using 'static' inside the class
// const instance1 = new Counter(0);
// const instance2 = new Counter(1);

console.log(Counter.increment());
console.log(Counter.increment());
