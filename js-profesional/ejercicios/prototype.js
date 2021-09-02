// Crea un objeto comun y corriente
// const zelda = {
//   name: "Zelda",
// };

// zelda.sayHi = function () {
//   console.log(`Hola soy ${this.name}`);
// };
// zelda.sayHi();

// Seamos mas eficientes

// const heroMethods = {
//   sayHi: function () {
//     console.log(`Hola me llamo ${this.name}`);
//   },
// };

// function Hero(name) {
//   const hero = {
//     name,
//   };

//   hero.sayHi = heroMethods.sayHi;

//   return hero;
// }

// const zelda = Hero("Zelda");
// zelda.sayHi();
// const link = Hero("Link");
// link.sayHi();

//////////////////////////////////////

// Object.create
// const newObject = Object.create();

function Hero(name) {
  this.name = name;
}

Hero.prototype.sayHi = function () {
  console.log(`New: ${this.name}`);
};

const zelda = new Hero("Zelda");
zelda.sayHi();
const link = new Hero("Link");
link.sayHi();
