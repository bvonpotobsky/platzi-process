console.log(global);

let counter = 0;
let interval = setInterval(() => {
  if (counter === 3) clearInterval(interval);
  console.log("Hola");
  counter++;
}, 1000);

setImmediate(() => {
  console.log("Chau");
});

console.log(__dirname);
console.log(__filename);
