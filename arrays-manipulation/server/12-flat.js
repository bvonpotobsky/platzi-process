const matriz = [
  [1, 2, 3],
  [4, 5, 6, [1, 2]],
  [7, 8, 9, 10],
];

// Utilizando for
const newArray = [];
for (let i = 0; i < matriz.length; i++) {
  const array = matriz[i];

  for (let j = 0; j < array.length; j++) {
    const element = matriz[i][j];
    newArray.push(element);
  }
}
// console.log(newArray);

// Con el metodo flat
const newArrayFlated = matriz.flat(2);

// Con recursividad

function flatArray(item, res = []) {
  if (!Array.isArray(item)) {
    return res.push(item);
  } else {
    item.forEach((element) => {
      flatArray(element, res);
    });
  }
  return res;
}

console.log(flatArray(matriz));
