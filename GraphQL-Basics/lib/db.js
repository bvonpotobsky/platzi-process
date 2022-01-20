"use strict";

const { MongoClient } = require("mongodb");

const { DB_USER, DB_PASSWD, DB_HOST, DB_PORT, DB_NAME, DB_URI } = process.env;

const uri = DB_URI;

let connection;

async function connectDB() {
  if (connection) return connection;
  let client;

  try {
    client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    connection = client.db(DB_NAME);
  } catch (error) {
    console.log("No se pudo conectar a la base de datos de mongo", uri, error);
    process.exit(1);
  }
  return connection;
}

module.exports = connectDB;
