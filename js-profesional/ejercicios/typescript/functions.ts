// Funciones
function add(a: number, b: number) {
  return a + b;
}

const sum = add(2, 2);
console.log(sum);

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return b + a;
  };
}

const addFour = createAdder(4);
const fourPlusSix = addFour(6);
console.log(fourPlusSix);

// Funcion con parametro opcional //! -> param?: string
function fullName(firstName: string, lastName?: string): string {
  return `${firstName} ${lastName}`;
}

const sayJustName = fullName("Benjamin", "von Potobsky");
console.log(sayJustName);

// Funcion con parametros que seran definidos por default si no reciben un argumento
function sayName(firstName: string, lastName: string = "von Potobsky"): string {
  return `${firstName} ${lastName}`;
}

const sayHi = sayName("Benjamin");
console.log(sayHi);
