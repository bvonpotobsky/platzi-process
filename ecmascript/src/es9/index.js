const person = {
  name: "Ben",
  age: 23,
  country: "ARG",
};

let { age, ...all } = person;
console.log(age);
console.log(all);
console.clear();

const human = {
  name: "Lucas",
  age: 24,
};

const human1 = {
  ...human,
  country: "ARG",
};
console.log(human1);
console.clear();

const hiPeople = () => {
  return new Promise((resolve, reject) => {
    true ? resolve("Hello World") : reject(new Error("Test Error"));
  });
};

hiPeople()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("La promesa finalizo"));

console.clear();

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2018-04-20");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
