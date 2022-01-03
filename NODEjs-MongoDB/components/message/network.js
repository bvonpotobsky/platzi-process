const express = require("express");

const router = express.Router();

const response = require("../../network/response");
const {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
} = require("./controller");

router.get("/", (req, res) => {
  const filterMessages = req.query.user || null;

  getMessages(filterMessages)
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
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { message } = req.body;

  updateMessage(id, message)
    .then((data) => {
      response.success(req, res, data);
    })
    .catch((e) => (res, req, 500, "Error interno"));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  deleteMessage(id)
    .then(() => {
      response.success(req, res, `Usuario ${id} eliminado`);
    })
    .catch((e) => {
      response.error(req, res, 500, "Error interno");
    });
});

module.exports = router;
