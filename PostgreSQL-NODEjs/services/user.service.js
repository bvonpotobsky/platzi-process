const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');
class UserService {
  constructor() {}

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    const data = await models.User.findAll();
    return data;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);

    if (!user) throw boom.notFound('User Not Found');

    return user;
  }

  async update(id, changes) {
    const user = await models.User.findByPk(id);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await models.User.findByPk(id);
    if (!user) throw boom.notFound('User does not exist');

    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
