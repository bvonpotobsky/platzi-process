require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  dbUrl: process.env.DATABASE_URL,
  apiKey: process.env.API_KEY,
  jwtSecret: process.env.JWT_SECRET,
  nodemailerPassword: process.env.NODEMAILER_PASSWORD,
  nodemailerEmail: process.env.NODEMAILER_EMAIL,
  resetPasswordUrl: process.env.RESET_PASSWORD_URL,
};

module.exports = { config };
