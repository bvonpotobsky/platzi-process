const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    database: 'my_store',
    user: 'nico',
    host: 'localhost',
    password: 'admin123',
    port: 5432,
  });

  await client.connect();
  return client;
}

module.exports = getConnection;
