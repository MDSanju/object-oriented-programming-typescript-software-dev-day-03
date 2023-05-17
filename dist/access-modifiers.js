"use strict";
// Access modifiers example
class BankAccount {
    constructor(id, name, _balance) {
        this.id = id;
        this.name = name;
        this._balance = _balance;
    }
    ;
    withdrawMoney(amount) {
        console.log(`Withdrawal amount: ${amount}`);
    }
    ;
    deposit(amount) {
        return this._balance = this._balance + amount;
    }
    ;
}
;
class StudentAccount extends BankAccount {
    studentMethod() {
        console.log(this.id);
    }
}
;
const myAccount = new BankAccount(343, 'John', 500);
console.log(myAccount);
console.log(myAccount.deposit(45));
myAccount.withdrawMoney(300);
const studentAccountId = new StudentAccount(489, 'Bob', 861);
studentAccountId.studentMethod();
