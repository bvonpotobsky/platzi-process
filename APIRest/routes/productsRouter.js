const express = require("express");
const ProductsService = require("../services/productsService");

const validatorHandler = require("../middlewares/validatorHandler");
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require("../schemas/productSchema");

const router = express.Router();
const service = new ProductsService();

// GET
router.get("/", async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get("/filter", (req, res) => {
  res.send("Yo soy un filter");
});

router.get(
  "/:id",
  validatorHandler(getProductSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);

      res.json(product);
    } catch (err) {
      next(err);
    }
  }
);

// POST
router.post(
  "/",
  validatorHandler(createProductSchema, "body"),
  async (req, res) => {
    const { body } = req;
    const newProduct = await service.create(body);

    res.status(201).json(newProduct);
  }
);

// PATCH partial update
router.patch(
  "/:id",
  validatorHandler(getProductSchema, "params"),
  validatorHandler(updateProductSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const product = await service.update(id, body);

      res.json(product);
    } catch (err) {
      next(err);
    }
  }
);

// DELETE
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await service.delete(id);

  res.json(product);
});

module.exports = router;
