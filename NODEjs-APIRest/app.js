const express = require("express");
const routerAPI = require("./routes");

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require("./middlewares/error.handler");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

routerAPI(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
