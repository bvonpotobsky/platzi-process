const express = require("express");
const routerAPI = require("./routes");

const {
  logErrors,
  errorHanlder,
  boomErrorHandler,
} = require("./middlewares/errorHandler");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Get root
app.get("/", (req, res) => {
  res.send("Hola esta es la pagina principal");
});

routerAPI(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHanlder);

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
