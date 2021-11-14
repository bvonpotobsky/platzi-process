const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    user: 'nico',
    database: 'my_store',
    password: 'admin123',
    port: 5432,
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
