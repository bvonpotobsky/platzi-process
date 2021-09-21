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

function conversation(name, times, callback) {
  if (times >= 0) {
    talk(() => {
      conversation(name, --times, callback);
    });
  } else {
    sayBye(name, callback);
  }
}

sayHi("Benjamin", function (name) {
  conversation("Benjamin", 3, () => {
    console.log("Proceso terminado");
  });
});
