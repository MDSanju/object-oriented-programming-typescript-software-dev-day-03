"use strict";
// Keyof guard type
function add(param1, param2) {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}
console.log(add(1, 2));
console.log(add("2", "3"));
const checkUser = (user) => {
    if ('role' in user) {
        return `I am an ${user.role}!`;
    }
    else {
        return 'I am a normal user!';
    }
};
const normalUser1 = {
    name: 'John',
};
const adminUser1 = {
    name: 'Kayel',
    role: 'admin',
};
console.log(checkUser(normalUser1));
console.log(checkUser(adminUser1));
// instanceof type guard
class Developer {
    constructor(name, expertise) {
        this.name = name;
        this.expertise = expertise;
    }
    ;
    work() {
        console.log('I am a Developer');
    }
}
;
class Web extends Developer {
    constructor(name, expertise) {
        super(name, expertise);
    }
    ;
    webField() {
        console.log('I build Web Application');
    }
    ;
}
;
class Ai extends Developer {
    constructor(name, expertise) {
        super(name, expertise);
    }
    ;
    mlField() {
        console.log('I am a Machine Learning engineer');
    }
    ;
}
;
const isWebDeveloper = (developer) => {
    return developer instanceof Web;
};
const isAiDeveloper = (developer) => {
    return developer instanceof Ai;
};
const developmentRole = (developer) => {
    if (isWebDeveloper(developer)) {
        developer.webField();
    }
    else if (isAiDeveloper(developer)) {
        developer.mlField();
    }
    else {
        developer.work();
    }
    ;
};
const webDeveloper = new Web('John', 'Web Developer'); // instance
const machineLearningDeveloper = new Ai('Kayel', 'AI Engineer'); // instance
developmentRole(machineLearningDeveloper);
