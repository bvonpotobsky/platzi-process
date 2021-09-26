function sayHi(name, myCallback) {
  setTimeout(() => {
    console.log(`Hola, ${name}`);
    myCallback();
  }, 1000);
}

function sayBye(name, otherCallback) {
  setTimeout(() => {
    console.log(`Adios, ${name}`);
    otherCallback();
  }, 1000);
}

function talk(callbackTalk) {
  setTimeout(() => {
    console.log("Bla bla bla");
    callbackTalk();
  }, 1000);
}
