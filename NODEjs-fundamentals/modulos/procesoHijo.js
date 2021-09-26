const { exec, spawn } = require("child_process");

// exec("node consola.js", (err, stdout, stderr) => {
//   if (err) console.log(err);

//   console.log(stdout);
// });

let process = spawn("ls", ["-la"]);
console.log(process);
console.log(process.connected);

process.stdout.on("data", (dato) => {
  console.log("Esta muerto?");
  console.log(process.killed);
  console.log(dato.toString());
});

process.on("exit", () => {
  console.log("Process finished");
  console.log(process.killed);
});
