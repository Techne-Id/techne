"use strict";

const knex = require("../config/database");

class Materi {
  findAll() {
    return new Promise((resolve, reject) => {
      knex
        .select("*")
        .from("materi")
        .then((results) => {
          resolve({ code: 200, data: results });
        })
        .catch((err) => {
          reject({ code: 500, data: err });
        });
    });
  }
  findParent(parent_slug) {
    console.log(parent_slug);
    return new Promise(async (resolve, reject) => {
      const subquery = knex("materi").where("slug", "=", parent_slug).select("id");
      const child = await knex
        .select("*")
        .from("materi")
        .where("parent", "=", subquery)
        .then((results) => {
          return results;
        })
        .catch((err) => {
          reject({ code: 500, data: err });
        });

      const parent = await knex
        .select("*")
        .from("materi")
        .where("slug", "=", parent_slug)
        .then((results) => {
          return results;
        })
        .catch((err) => {
          reject({ code: 500, data: err });
        });

      console.log("INI", { code: 200, data: { child: child, parent: parent[0] } });
      resolve({ code: 200, data: { child: child, parent: parent[0] } });
    });
  }
  findChild(parent_slug) {
    return new Promise((resolve, reject) => {
      const subquery = knex("materi").where("slug", "=", parent_slug).select("id");
      knex
        .select("*")
        .from("materi")
        .where("parent", "=", subquery)
        .then((results) => {
          resolve({ code: 200, data: results });
        })
        .catch((err) => {
          reject({ code: 500, data: err });
        });
    });
  }
  findFile(parent, file) {
    return new Promise((resolve, reject) => {
      knex
        .select("m.*", "materi.slug as parent_slug")
        .from("materi as m")
        .leftJoin("materi", "m.parent", "materi.id")
        .where("materi.slug", "=", parent)
        .andWhere("m.slug", "=", file)
        .then((results) => {
          resolve({ code: 200, data: results });
        })
        .catch((err) => {
          reject({ code: 500, data: err });
        });
    });
  }
}
module.exports = new Materi();
