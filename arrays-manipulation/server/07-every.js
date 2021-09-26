const numbers = [1, 2, 3, 4, 5, 6, 7];

const rta = numbers.every((number) => number < 10); // true
const rta2 = numbers.every((number) => number > 5); // false

console.log(rta);
console.log(rta2);
