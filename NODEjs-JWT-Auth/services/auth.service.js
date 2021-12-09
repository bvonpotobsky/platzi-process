const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const { config } = require('../config/config');

const UserService = require('./user.service');
const service = new UserService();

class AuthService {
  async getUser(email, password) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw (boom.unauthorized('Invalid credentials'), false);
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw boom.unauthorized('Invalid credentials');
    }
    delete user.dataValues.password;
    return user;
  }

  async signToken(user) {
    const payload = {
      sub: user.id,
      role: user.role,
    };

    const token = jwt.sign(payload, config.jwtSecret);
    return {
      user,
      token,
    };
  }

  async sendRecovery(email) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized('Invalid credentials');
    }

    const payload = {
      sub: user.id,
    };

    const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '15min' });
    const link = `http://localhost:3000/recovery?token=${token}`;
    await service.update(user.id, {
      recoveryToken: token,
    });

    const mail = {
      from: config.nodemailerEmail,
      to: `${user.email}`,
      subject: 'Reset Password',
      text: 'Click on the link to reset your password',
      html: `<a href="${link}">Reset Password</a>`,
    };

    const rta = await this.sendEmail(mail);
    return rta;
  }

  async changePassword(token, newPassword) {
    try {
      const payload = jwt.verify(token, config.jwtSecret);
      const user = await service.findOne(payload.sub);

      if (user.recoveryToken !== token) {
        throw boom.unauthorized('Invalid token');
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await service.update(user.id, {
        password: hashedPassword,
        recoveryToken: null,
      });

      return {
        message: 'Password changed',
      };
    } catch (err) {
      throw boom.unauthorized('Invalid token');
    }
  }

  async sendEmail(infoMail) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: config.nodemailerEmail,
        pass: config.nodemailerPassword,
      },
    });

    await transporter.sendMail(infoMail);

    return {
      message: 'Email sent',
    };
  }
}

module.exports = AuthService;
