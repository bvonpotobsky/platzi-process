const helloWorld = () => {
  const hello = 'Hello World';
  console.log(hello);
};

helloWorld();

const scope = 'Im a global';

const functionScope = () => {
  // Esta variable, tiene scope local dentro de la funcion por ende no sobre escripe la otra variable!
  const scope = 'Im just a local';
  const func = () => scope;
  console.log(func()); // im just a local
};

console.log(scope); // 'Im a global'
functionScope();
