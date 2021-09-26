const numbers = [1, 2, 3, 4, 5];

const sumAll = numbers.reduce((acc, index) => acc + index, 0);

console.log(sumAll);

const items = [1, 3, 2, 3, 10, 10, 10];

const numCounter = items.reduce((obj, item) => {
  // obj[item] ? (obj[item] += 1) : (obj[item] = 1);

  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  }

  return obj;
}, {});

// console.log(numCounter);

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const rta = data
  .map((item) => item.level)
  .reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] = obj[item] + 1;
    }

    return obj;
  }, {});

// console.log(rta);

const listOfNumbers = [
  1, 2, 3, 4, 5, 5, 9, 3, 2, 9, 9, 9, 9, 1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4,
  3, 8, 3, 4, 5, 2, 2,
];

const getRange = listOfNumbers.reduce(
  (obj, item) => {
    if (item > 0 && item <= 5) obj["1-5"] += 1;

    if (item >= 6 && item <= 8) obj["6-8"] += 1;

    if (item >= 9 && item <= 10) obj["9-10"] += 1;

    return obj;
  },
  {
    "1-5": 0,
    "6-8": 0,
    "9-10": 0,
  }
);

console.log(getRange);
