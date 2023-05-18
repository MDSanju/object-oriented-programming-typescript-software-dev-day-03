"use strict";
// Static class example
class Counter {
    static increment() {
        return Counter.counter = Counter.counter + 1;
    }
    ;
    static decrement() {
        return Counter.counter = Counter.counter - 1;
    }
    ;
}
Counter.counter = 0;
;
// No need instance after using 'static' inside the class
// const instance1 = new Counter(0);
// const instance2 = new Counter(1);
console.log(Counter.increment());
console.log(Counter.increment());
