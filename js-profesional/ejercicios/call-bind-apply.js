// ! What is this?
// This en el scope global
console.log(`this: ${this}`);

// This en el scope de una función
function whoIsThis() {
  return this;
}
console.log(`whoIsThis(): ${whoIsThis()}`);

// This en el scope de una función en stric mode

function whoIsThisStric() {
  "use strict";
  return this;
}
console.log(`whoIsThisStric(): ${whoIsThisStric()}`);

// This en el contexto de un objeto
const person = {
  name: "Ben",
  age: 23,
  gender: "Male",

  sayHi() {
    console.log(`Hola soy ${this.name}`);
  },
};
person.sayHi();

// This cuando sacamos una funcion de un objeto
const action = person.sayHi;
action();

// This en el contexto de una Clase
function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  console.log(`Me llamo ${this.name}`);
};

// En el contexto de una clase, this se refiere a la instancia del objeto
const Angela = new Person("Angela");
Angela.sayHi();

/////////////////////////////////////////////////

// ! Metodos 'call', 'apply' and 'bind'
// Establece 'this' usando 'call'

function sayHi() {
  console.log(`Hola, soy ${this.name} ${this.surname}`);
}

const rosario = {
  name: "Rosario",
  surname: "Anc",
};

// Con el metodo call se establece el this de la funcion llamada
sayHi.call(rosario);

function walk(meters, way) {
  console.log(`${this.name} camina ${meters} hacia ${way}`);
}
// Cuando el contexto/objeto que estoy llamando no tiene las variables necesarias para la funcion,
// se pueden declarar como argumentos del metodo call
// walk.call(rosario, meters, way);
walk.call(rosario, 400, "norte");

// Con el metodo apply, los argumentos que se invocan van dentro de un arreglo
// walk.apply(rosario, [meters, way]);
walk.apply(rosario, [820, "sur"]);

/*
  Call, -comas,
  Apply, -arreglo
*/

// Establecer 'this' en una nueva funcion usando el metodo 'bind'
const daniel = { name: "Daniel", surname: "Lopez" };
// Guarda en una variable y llama esa variable como funcion
const danielSayHi = sayHi.bind(daniel);
danielSayHi();

//! CUANDO ES UTIL USAR ESTOS METODOS

// Esta es una forma de hacerlo, crando un array desde el Nodelist que proviene de querySelectorAll();
const buttons = Array.from(document.querySelectorAll(".call-to-action"));
// buttons.forEach((button) => {
//   button.onclick = () => alert("Nunca pares de aprender");
// });

// Otra forma, es utilizando Array.prototype
Array.prototype.forEach.call(buttons, (button) => {
  button.onclick = () => alert("Nunca pares de aprender");
});
