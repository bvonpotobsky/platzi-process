const moneyBox = (coins) => {
  let saveCoins = 0;
  saveCoins += coins;
  console.log(`Money box: ${saveCoins}`);
};

moneyBox(5);
moneyBox(10);

const moneyBox2 = () => {
  let saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += coins;
    debugger;
    console.log(`MoneyBox: $${saveCoins}`);
  };
  return countCoins;
};

const myMoneyBox = moneyBox2();

myMoneyBox(5);
myMoneyBox(10);
myMoneyBox(15);

nameOfDog('Elmo');

const helloWorld = () => {
  globalVar = "I'm global";
};
