const express = require("express");
const cors = require("cors");
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

const whitelist = ["http://localhost:3000"];
const options = {
  origin: (origin, cb) => {
    if (whitelist.includes(origin)) {
      cb(null, true);
    } else {
      cb(new Error("Access Not Allow"));
    }
  },
};

app.use(cors(options));

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
