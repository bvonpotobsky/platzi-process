let sum1 = 0;
console.time("bucleOne");
for (let i = 0; i < 100000; i++) {
  sum1 += 1;
}
console.timeEnd("bucleOne");

let sum2 = 0;
console.time("bucleTwo");
for (let i = 0; i < 100000; i++) {
  sum2 = sum2 + 1;
}
console.timeEnd("bucleTwo");
