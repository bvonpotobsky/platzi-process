const hello = 'Hello';
const world = 'Hello world';
const helloWorld = 'Hello world!';

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
};

anotherFunction();

const helloWorld = () => {
    globalVar = 'im Global';
}

helloWorld();
console.log(globalVar);

const anotherFunction2 = () => {
    var localVar = globalVar = 'Im Global';
}

anotherFunction2();
console.log(globalVar);