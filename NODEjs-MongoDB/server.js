const express = require("express");
const app = express();
const server = require("http").Server(app);

const bodyParser = require("body-parser");
const socket = require("./socket");

const db = require("./db");
const { config } = require("./config/config");
const dbURI = config.mongodbURI;

const routes = require("./network/routes");

db(dbURI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

socket.connect(server);

routes(app);

app.use("/app", express.static("public"));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
