//  Function old way to define params
function newFunction(name, age, country) {
  var name = name || "Ben";
  var age = age || 23;
  var country = country || "ARG";

  console.log(name, age, country);
}

newFunction();

// ES6
function newFunction2(name = "Ben", age = 23, country = "ARG") {
  console.log(name, age, country);
}

newFunction2();

let hello = "Hello";
let world = "World";
let sayHi = `${hello} ${world}`;
console.log(sayHi);

let person = {
  first: "Ben",
  age: 23,
  country: "ARG",
};

let { first, age, country } = person;

console.log(first, age, country);

let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Yesica", "Camila"];

let education = ["Juan", ...team1, ...team2];
