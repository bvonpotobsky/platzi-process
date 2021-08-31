let numbers = [1, 2, 3, 4, 5];
let words = ["Hola", "Mundo", "We", "Love", "JavaScript"];

function includesValue(array, value) {
  if (array.includes(value)) {
    console.log(`Si se encuentra el valor ${value}`);
  } else {
    console.log(`No se encuentra el valor ${value}`);
  }
}

includesValue(numbers, 4);
includesValue(words, "Hola");

let base = 4;
let exponente = 3;
let result = base ** exponente;

console.log(result);
