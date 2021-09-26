const elements = ["Fire", "Air", "Water"];

let rtaFinal = "";
const separator = "--";

for (let i = 0; i < elements.length; i++) {
  const element = elements[i];
  rtaFinal = `${rtaFinal}${element}${separator}`;
}

console.log(rtaFinal);

const rta2 = elements.join("--");
console.log(rta2);
