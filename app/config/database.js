"use strict";

const env = process.env.NODE_ENV || "development";
const knexfile = require("../database/db");
const knex = require("knex")(knexfile[env]);

module.exports = knex;
