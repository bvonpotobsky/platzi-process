let array = [1, 2, 3, [1, 2, 3], [1, 2, 3]];

console.log(array.flat());

let arr = [1, 2, 3, 4, 5];
console.log(arr.flatMap((value) => [value, value * 2]));

let hello = "             hello world";

console.log(hello);
console.log(hello.trim());
console.log(hello.trimStart());
console.clear();

let entries = [
  ["name", "oscar"],
  ["age", 32],
];

console.log(Object.fromEntries(entries));

let mySymbol = "👇🏽";
let symbol = Symbol(mySymbol);
console.log(symbol.description);
