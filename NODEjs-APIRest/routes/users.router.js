const express = require("express");
const router = express.Router();

// Query params:
router.get("/", (req, res) => {
  const { limit, offset } = req.query;

  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  }
});

module.exports = router;
