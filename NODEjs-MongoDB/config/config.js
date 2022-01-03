require("dotenv").config({ path: ".env" });

const config = {
  mongodbURI: process.env.DATABASE_URI,
};

module.exports = { config };
