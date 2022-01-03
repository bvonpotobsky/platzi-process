const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const PORT = 8080;

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("New client connected");
  socket.emit("message", "Welcome");
});

setInterval(() => {
  io.emit("message", "Hi everyone, feel free to talk each other");
}, 3000);

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
