require('dotenv').config()

const pool = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USERNAME || 'postgres',
    database: process.env.DB_NAME || 'root',
    password: process.env.DB_PASS || '',
    port: process.env.DB_PORT || '5432',
  }
});


module.exports = pool