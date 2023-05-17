// Access modifiers example

class BankAccount {
    readonly id: number;
    name: string;
    private _balance: number;

    constructor(id: number, name: string, _balance: number) {
        this.id = id;
        this.name = name;
        this._balance = _balance;
    };

    withdrawMoney(amount: number) {
        console.log(`Withdrawal amount: ${amount}`);
    };

    deposit(amount: number): number {
        return this._balance = this._balance + amount;
    };
};

class StudentAccount extends BankAccount {
    studentMethod() {
        console.log(this.id);
    }
};

const myAccount = new BankAccount(343, 'John', 500);
console.log(myAccount);

console.log(myAccount.deposit(45));
myAccount.withdrawMoney(300);

const studentAccountId = new StudentAccount(489, 'Bob', 861);
studentAccountId.studentMethod();


