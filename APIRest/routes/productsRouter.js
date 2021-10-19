const express = require("express");
const ProductsService = require("../services/productsService");

const router = express.Router();

const service = new ProductsService();

// GET
router.get("/", async (req, res) => {
  const products = await service.find();
  res.json(products);
});

// router.get("/filter", (req, res) => {
//   res.send("Yo soy un filter");
// });

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await service.findOne(id);

  res.json(product);
});

// POST
router.post("/", async (req, res) => {
  const { body } = req;
  const newProduct = await service.create(body);

  res.status(201).json(newProduct);
});

// PATCH partial update
router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const product = await service.update(id, body);

    res.json(product);
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await service.delete(id);

  res.json(product);
});

module.exports = router;
