// function soyAsync(myCallback) {
//   setTimeout(() => {
//     console.log("Estoy siendo asincrona...");
//     myCallback();
//   }, 1000);
// }

// console.log("Iniciando proceso...");
// soyAsync(function () {
//   console.log("Terminando proceso...");
// });

function sayHi(name, myCallback) {
  setTimeout(() => {
    console.log(`Hola, ${name}`);
    myCallback();
  }, 1000);
}

function sayBye(name, otherCallback) {
  setTimeout(() => {
    console.log(`Adios, ${name}`);
    otherCallback();
  }, 1000);
}

console.log("Iniciando proceso");
sayHi("Benjamin", () => {
  sayBye("Benja", () => {
    console.log("Terminando proceso");
  });
});
