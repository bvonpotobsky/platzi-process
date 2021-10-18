const express = require("express");
const router = express.Router();

// Get multiple routes
router.get("/", (req, res) => {
  const { categories } = req.params;
  res.json({
    categories,
  });
});

router.get("/:categoryId/products/:productId", (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

module.exports = router;
