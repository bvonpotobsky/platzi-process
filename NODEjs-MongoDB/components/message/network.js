const express = require("express");

const router = express.Router();

const response = require("../../network/response");
const { addMessage, getMessages } = require("./controller");

router.get("/", (req, res) => {
  getMessages()
    .then((messageList) => {
      response.success(req, res, messageList);
    })
    .catch((e) => response.error(req, res, 500, "Unexpected Error"));
});

router.post("/", (req, res) => {
  const { user, message } = req.body;

  addMessage(user, message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage);
    })
    .catch((e) => {
      response.error(req, res, 400, "Información invalida");
    });

  if (req.query.error == "ok") {
  } else {
  }
});

module.exports = router;
