"use strict";

const knex = require("../config/database");

class Auth {
  registerUser(first_name, last_name, username, email, password) {
    return new Promise((resolve, reject) => {
      knex("users")
        .insert({
          first_name: first_name,
          last_name: last_name,
          username: username,
          email: email,
          password: password,
        })
        .then((results) => {
          resolve({ code: 200, data: results });
        })
        .catch((err) => {
          reject({ code: 500, data: err });
        });
    });
  }

  getUserByUsername(username) {
    return new Promise((resolve, reject) => {
      knex("users")
        .where("username", username)
        .select()
        .then((user) => {
          if (user.length > 0) {
            resolve(user[0]);
          } else {
            resolve(null); // Tidak ada pengguna dengan username tersebut
          }
        })
        .catch((err) => {
          reject({ code: 500, data: err });
        });
    });
  }
}
module.exports = new Auth();
