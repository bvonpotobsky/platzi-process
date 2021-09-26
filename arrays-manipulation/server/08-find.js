const numbers = [1, 23, 3, 4, 5, 6, 443, 2, 2, 2, 1, 1, 3, 4];

// return element if find
// return undefined if not
const rta = numbers.find((number) => number === 5);

console.log(rta);

// return index if find
// return -1 if not
const rt2 = numbers.findIndex((number) => number === 55); // -1
console.log(rt2);
