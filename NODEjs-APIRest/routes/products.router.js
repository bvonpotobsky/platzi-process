const express = require("express");

const ProductsService = require("../services/products.service");
const validatorHandler = require("../middlewares/validator.handler");
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require("../schemas/products.schema");

const router = express.Router();
const service = new ProductsService();

router.get("/", async (req, res) => {
  const products = await service.findAllProducts();

  res.json(products);
});

router.get("/filter", async (req, res) => {
  res.send("Soy un filter");
});

router.get(
  "/:id",
  validatorHandler(getProductSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOneProduct(id);

      res.json(product);
    } catch (err) {
      next(err);
    }
  }
);

router.post(
  "/",
  validatorHandler(createProductSchema, "body"),
  async (req, res) => {
    const { name, price, image } = req.body;
    const newProduct = await service.createProduct({ name, price, image });

    res.status(201).json(newProduct);
  }
);

router.patch(
  "/:id",
  validatorHandler(getProductSchema, "params"),
  validatorHandler(updateProductSchema, "body"),
  async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.updateProduct(id, body);

      res.json(product);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
);

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const rta = await service.deleteProduct(id);
  res.json(rta);
});

module.exports = router;
