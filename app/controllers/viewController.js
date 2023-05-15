"use strict";

class ViewController {
  async index(req, res, next) {
    res.render("layout", { body: "./page/index", title: "Techne.ID", scripts: ["materi.js"] });
  }
  async belajar(req, res, next) {
    res.render("layout", { body: "./page/belajar", title: "express", scripts: ["materi.js"] });
  }
  async modul(req, res, next) {
    res.render("layout", { body: "./page/materi", title: "express", scripts: ["modul.js"] });
  }
  async materi(req, res, next) {
    res.render("layout", { body: "./page/modul", title: "express", scripts: ["materi.js"] });
  }
  async file(req, res, next) {
    res.render("layout", { body: "./page/file", title: "express", scripts: ["file.js"] });
  }
}

module.exports = new ViewController();
