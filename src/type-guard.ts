// Keyof guard type

type Alphaneumeric = string | number;

function add(param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

console.log(add(1, 2));
console.log(add("2", "3"));



// In guard type

interface AdminUser {
    name: string;
    role: 'admin';
}

interface NormalUser {
    name: string;
}

type UserType = AdminUser | NormalUser;


const checkUser = (user: UserType): string => {
    if ('role' in user) {
        return `I am an ${user.role}!`;
    } else {
        return 'I am a normal user!';
    }
};

const normalUser1: NormalUser = {
    name: 'John',
};

const adminUser1: AdminUser = {
    name: 'Kayel',
    role: 'admin',
};

console.log(checkUser(normalUser1));
console.log(checkUser(adminUser1));



// instanceof type guard

class Developer {
    name: string;
    expertise: string;

    constructor(name: string, expertise: string) {
        this.name = name;
        this.expertise = expertise;
    };

    work() {
        console.log('I am a Developer');
    }

};

class Web extends Developer {
    constructor(name: string, expertise: string) {
        super(name, expertise);
    };
    webField() {
        console.log('I build Web Application');
    };
};

class Ai extends Developer {
    constructor(name: string, expertise: string) {
        super(name, expertise);
    };
    mlField() {
        console.log('I am a Machine Learning engineer');
    };
};

const isWebDeveloper = (developer: Developer): developer is Web => {
    return developer instanceof Web;
};

const isAiDeveloper = (developer: Developer): developer is Ai => {
    return developer instanceof Ai;
};

const developmentRole = (developer: Developer): void => {
    if (isWebDeveloper(developer)) {
        developer.webField();
    } else if (isAiDeveloper(developer)) {
        developer.mlField();
    } else {
        developer.work();
    };
};

const webDeveloper = new Web('John', 'Web Developer'); // instance
const machineLearningDeveloper = new Ai('Kayel', 'AI Engineer'); // instance

developmentRole(machineLearningDeveloper);
