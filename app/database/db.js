("use strict");

require("dotenv").config();

// const pool = require("knex")({
//   client: "pg",
//   version: "7.2",
//   connection: {
//     host: process.env.DB_HOST || "localhost",
//     user: process.env.DB_USERNAME || "postgres",
//     database: process.env.DB_NAME || "root",
//     password: process.env.DB_PASS || "",
//     port: process.env.DB_PORT || "5432",
//   },
// });

// module.exports = pool;

// ref: https://devhints.io/knex
// TODO: implement more dynamic env var settings loader
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USERNAME || "postgres",
      database: process.env.DB_NAME || "root",
      password: process.env.DB_PASS || "",
      port: process.env.DB_PORT || "5432",
    },
  },
  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
