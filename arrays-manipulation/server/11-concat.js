const elements = [1, 2, 3, 4];
const othersElements = [5, 6, 7, 8];

const newArray = [...elements];
for (let i = 0; i < othersElements.length; i++) {
  const element = othersElements[i];
  newArray.push(element);
}
console.log(newArray);

const newArray2 = elements.concat(othersElements);
console.log(newArray2);
