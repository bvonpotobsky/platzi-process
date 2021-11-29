const faker = require('faker');
const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
    // this.pool = pool;
    // this.pool.on('error', (err) => {
    //   console.error('Unexpected error on idle client', err);
    // });
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async find() {
    const products = await models.Product.findAll({
      include: ['category'],
    });

    return products;
  }

  async findOne(id) {
    const product = await models.Product.findOne(id);

    if (!product) {
      throw boom.notFound('Product Not Found');
    }
    return product;
  }

  async update(id, changes) {
    const product = this.findOne(id);

    const updatedProduct = await product.update(changes);
    return updatedProduct;
  }

  async delete(id) {
    const product = this.findOne(id);

    const deletedProduct = await product.destroy(id);
    return deletedProduct;
  }
}

module.exports = ProductsService;
