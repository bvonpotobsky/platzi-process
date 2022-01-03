const express = require("express");

const response = require("../../network/response");
const { addUser } = require("./controller");
const router = express.Router();

router.post("/", (req, res) => {
  const { name } = req.body;

  addUser(name)
    .then((data) => {
      response.success(req, res, data);
    })
    .catch((e) => response.error(req, res, "Invalid data", 500));
});

module.exports = router;
