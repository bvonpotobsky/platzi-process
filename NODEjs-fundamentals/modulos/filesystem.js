const fs = require("fs");

function read(route, cb) {
  fs.readFile(route, (err, data) => {
    // Leido
    console.log(data.toString());
  });
}

function write(route, content, cb) {
  fs.writeFile(route, content, (err) => {
    if (err) console.error("No he podido escribirlo");
    console.log("Se ha escrito correctamente");
  });
}

function deleteFile(route, cb) {
  fs.unlink(route, (err) => {
    console.log(err);
  });
}

write("./archivo.txt", "Vamoooo NODE", console.log);
read("./archivo.txt");
deleteFile("./archivo.txt", console.log);
