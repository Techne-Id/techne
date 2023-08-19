"use strict";

class ViewController {
  // BASE PAGE
  async index(req, res, next) {
    res.render("layout", { body: "./page/index", title: "Techne Indonesia", scripts: ["materi.js"] });
  }
  async login(req, res, next) {
    res.render("blank", { body: "./page/login", title: "Techne Indonesia", scripts: ["materi.js"] });
  }
  async register(req, res, next) {
    res.render("blank", { body: "./page/register", title: "Techne Indonesia", scripts: ["materi.js"] });
  }

  // KUIS PAGE
  async kuis(req, res, next) {
    res.render("layout", { body: "./page/kuis", title: "Techne Indonesia", scripts: ["materi.js"] });
  }

  // BELAJAR PAGE
  async belajar(req, res, next) {
    res.render("layout", { body: "./page/belajar", title: "Techne Indonesia", scripts: ["materi.js"] });
  }
  async modul(req, res, next) {
    res.render("layout", { body: "./page/materi", title: "Techne Indonesia", scripts: ["modul.js"] });
  }
  async materi(req, res, next) {
    res.render("layout", { body: "./page/modul", title: "Techne Indonesia", scripts: ["materi.js"] });
  }
  async file(req, res, next) {
    res.render("layout", { body: "./page/file", title: "Techne Indonesia", scripts: ["file.js"] });
  }
}

module.exports = new ViewController();
