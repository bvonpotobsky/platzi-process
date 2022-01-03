const express = require("express");
const bodyParser = require("body-parser");

const db = require("./db");
const { config } = require("./config/config");
const dbURI = config.mongodbURI;

const routes = require("./network/routes");

db(dbURI);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.use("/app", express.static("public"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
