function willBreak() {
  return 3 + z;
}

function otherFunction() {
  willBreak();
}

function asyncWillBreak(cb) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (err) {
      console.log("Error en mi funcion asincrona");
      cb(err);
    }
  }, 1000);
}

try {
  // willBreak();
  // otherFunction();
  asyncWillBreak(() => {
    console.log("Hay error");
  });
} catch (err) {
  console.log("Ops, there is an error");
  console.log(err.message);
  console.log("Its alright, we will handle the error for you");
}
