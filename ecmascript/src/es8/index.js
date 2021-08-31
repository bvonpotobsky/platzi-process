const data = {
  frontend: "Ben",
  backend: "Rosario",
  design: "Ana",
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);
const values = Object.values(data);
console.log(values);
console.log(values.length);

console.clear();

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};
helloAsync();

const anotherFunction = async () => {
  try {
    const hiWorld = await helloWorld();
    console.log(hiWorld);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
