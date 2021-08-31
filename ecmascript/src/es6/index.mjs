// //  Function old way to define params
// function newFunction(name, age, country) {
//   var name = name || "Ben";
//   var age = age || 23;
//   var country = country || "ARG";

//   console.log(name, age, country);
// }

// newFunction();

// // ES6
// function newFunction2(name = "Ben", age = 23, country = "ARG") {
//   console.log(name, age, country);
// }

// newFunction2();

// let hello = "Hello";
// let world = "World";
// let sayHi = `${hello} ${world}`;
// console.log(sayHi);

// let person = {
//   first: "Ben",
//   age: 23,
//   country: "ARG",
// };

// let { first, age, country } = person;

// console.log(first, age, country);

// let team1 = ["Oscar", "Julian", "Ricardo"];
// let team2 = ["Valeria", "Yesica", "Camila"];

// let education = ["Juan", ...team1, ...team2];

// console.clear();

// // ES5
// const obj_es5 = { name: name, age: age };
// // ES6
// const obj = { surname, age };

//////////////////////////////

const names = [
  { name: "Oscar", age: 32 },
  { name: "Ben", age: 23 },
];

// ES5
const listOfNames = names.map(function (item) {
  console.log(item.name);
});

// ES6
const listOfNames2 = names.map((item) => {
  console.log(item.name);
});

const listOfNames3 = names.map((item) => console.log(item.name));

class calculator {
  constructor(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
  }

  sum(valueA, valueB) {
    return this.valueA + this.valueB;
  }
}

const calc = new calculator(3, 5);

console.log(calc.sum());

import { hello } from "./trial.mjs";

hello();
