process.on("beforeExit", () => {
  console.log("El proceso va a terminar");
});

process.on("exit", () => {
  console.log("El proceso acabó");
});

process.on("unhandleRejection", (err, origen) => {
  console.error("Vaya, se nos ha olvidado de capturar un error");
  console.error(err);
});

process.on("");
