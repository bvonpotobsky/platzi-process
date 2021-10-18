const express = require("express");
const faker = require("faker");

const router = express.Router();

// GET
router.get("/", (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

router.get("/filter", (req, res) => {
  res.send("Yo soy un filter");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const { name, price, image } = req.body;

  if (id) {
    res.status(200).json({
      id,
      name,
      price,
      image,
    });
  } else {
    res.status(404).json({
      message: "ID Not Found",
    });
  }
});

// POST
router.post("/", (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: "Product created",
    data: body,
  });
});

// PATCH partial update
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: "Product updated",
    data: body,
    id,
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: "Product deleted",
    id,
  });
});

module.exports = router;
