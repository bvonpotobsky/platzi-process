const faker = require("faker");
const boom = require("@hapi/boom");

class ProductsService {
  constructor() {
    this.products = [];
    this.generateProducts();
  }

  async generateProducts() {
    const limit = 100;

    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.image(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async findAllProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 5000);
    });
  }

  async findOneProduct(id) {
    const product = this.products.find((product) => product.id === id);

    if (!product) {
      throw boom.notFound("Product Not Found");
    }

    if (product.isBlock) {
      throw boom.conflict("Product is block");
    }

    return product;
  }

  async createProduct({ name, price, image }) {
    const newProduct = {
      id: faker.datatype.uuid(),
      name,
      price,
      image,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  async updateProduct(id, changes) {
    const index = this.products.findIndex((item) => item.id === id);

    if (index === -1) {
      throw boom.notFound("Product Not Found");
    }

    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
    };
    return this.products[index];
  }

  async deleteProduct(id) {
    const index = this.products.findIndex((item) => item.id === id);

    if (index === -1) {
      throw boom.notFound("Product Not Found");
    }

    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = ProductsService;
