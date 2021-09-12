// Boolean  
let muted: boolean = true;
muted = false;

// Numeros
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

// String
let nombre: string = 'Benjamin';
let saludo = `Me llamo ${nombre}`;

// Array
let people: string[] = [];
people = ['Isable', 'Benjamin', 'Ivon'];
// people.push(900);

let peopleAndAges: Array<string | number> = [];
peopleAndAges.push('Ricardo', 200);
console.log(peopleAndAges);

// Enum
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul",
}

let colorFavorito: Color = Color.Azul;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any
let comodin: any = "Joker";
comodin = { type: "Wildcard" };

// Object 
let someObject: object = { type: 'Objecto'};



