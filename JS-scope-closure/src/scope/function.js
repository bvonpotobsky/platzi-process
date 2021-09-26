// Function scope
const fruits = () => {
  const fruit = 'apple';
  console.log(fruit);
};

fruits();

const anotherFunction = () => {
  var x = 1;
  var x = 2; // Rewrite the variable
  const y = 1;
  console.log({ x, y });
};

anotherFunction();
