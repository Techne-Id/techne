"use strict";

class ViewController {
  async index(req, res, next) {
    res.render("layout", { body: "./page/index", title: "Techne Indonesia", scripts: ["materi.js"] });
  }
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
