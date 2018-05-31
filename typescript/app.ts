// string
let myName: string = 'Max';
// myName = 28;
let myAge: number = 27;
let anything;
anything = 12;

// myName = 30;

// number
// let myAge: number = 27;
// myAge = 'Max';

// boolean
let hasHobbies: boolean = false;
// hasHobbies = 1;

// assign types
let myRealAge: number;
myRealAge = 27;
// myRealAge = '27';

// array
let hobbies: any[] = ["Cooking", "Sports"];
hobbies = [100];
// hobbies = 100;

// tuples
let address: [string, number] = ["Superstreet", 99];

// enum
enum Color {
    Gray, // 0
    Green = 100, // 100
    Blue = 2// 2
}
let myColor: Color = Color.Blue;
console.log(myColor);

// any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3};
console.log(car);

// functions
function returnMyName(): string {
    return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
    console.log("Hello!");
}

// argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
// console.log(multiply(2, 'Max'));
console.log(multiply(10, 2));

// function types
let myMultiply: (a: number, b: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));

// objects
let userData: { name: string, age: number } = {
    name: "Max",
    age: 27
};
// userData = {
//     a: "Hello",
//     b: 22
// };

// complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
};
// complex = {};

// type alias

type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
};

// union types
let myRealRealAge: number | string = 27;
myRealRealAge = "27";
// myRealRealAge = true;

// check types
let finalValue = 30;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
// let & const
let variable = "test";
console.log(variable);
variable = "Another Variable";
console.log(variable);
// let & const
console.log("LET & CONST");
let variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; // Won't work

// Block scope
function reset() {
    // console.log(variable);
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);

// Arrow Functions
console.log("ARROW FUNCTIONS");
const addNumbers = function (number1: number, number2: number): number {
    return number1 + number2;
};
console.log(addNumbers(10, 3));

const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
console.log(multiplyNumbers(10, 3));

const greet = () => {
    console.log("Hello!");
};
greet();

const greetFriend = friend => console.log(friend);
greetFriend("Manu");

// Default Parameters
console.log("DEFAULT PARAMETERS");
const countdown = (start: number = 10): void => {
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown();

// Rest & Spread
console.log("REST & SPREAD");
const numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max(...numbers));

function makeArray(name: string, ...args: number[]) {
    return args;
}
console.log(makeArray("Max", 1, 2, 6));

// Destructuring
console.log("DESTRUCTURING");
const myHobbies = ["Cooking", "Sports"];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

const userData = {userName: "Max", age: 27};
const {userName: myName, age: myAge} = userData;
console.log(myName, myAge);

// Template Literals
const userName = "Max";
const greeting = `This is a heading!
I'm ${userName}.
This is cool!`;
console.log(greeting);
