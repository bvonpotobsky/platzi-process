const express = require("express");
const bodyParser = require("body-parser");

// const router = require("./components/message/network");
const routes = require("./network/routes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(router);

routes(app);

app.use("/app", express.static("public"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
