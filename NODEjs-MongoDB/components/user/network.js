const express = require("express");

const response = require("../../network/response");
const { addUser, getUsers } = require("./controller");
const router = express.Router();

router.post("/", (req, res) => {
  const { name } = req.body;

  addUser(name)
    .then((data) => {
      response.success(req, res, data);
    })
    .catch((e) => response.error(req, res, "Invalid data", 500));
});

router.get("/", (req, res) => {
  getUsers()
    .then((data) => response.success(req, res, data))
    .catch((e) => response.error(req, res, "Invalid data", 500));
});

module.exports = router;
