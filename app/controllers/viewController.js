"use strict";

class ViewController {
  // BASE PAGE
  async index(req, res, next) {
    res.render("layout", { body: "./page/index", title: "Techne Indonesia", scripts: [] });
  }
  async login(req, res, next) {
    res.render("blank", { body: "./page/login", title: "Techne Indonesia", scripts: [] });
  }
  async register(req, res, next) {
    res.render("blank", { body: "./page/register", title: "Techne Indonesia", scripts: [] });
  }

  // KUIS PAGE
  async kuis(req, res, next) {
    res.render("layout", { body: "./page/kuis", title: "Techne Indonesia", scripts: [] });
  }
  async tags(req, res, next) {
    res.render("layout", { body: "./page/tags", title: "Techne Indonesia", scripts: ["quis.js"] });
  }
  async soal(req, res, next) {
    res.render("layout", { body: "./page/soal", title: "Techne Indonesia", scripts: [] });
  }

  // BELAJAR PAGE
  async belajar(req, res, next) {
    res.render("layout", { body: "./page/belajar", title: "Techne Indonesia", scripts: [] });
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

  // BARD PAGE
  async bard(req, res, next) {
    res.render("layout", { body: "./page/bard", title: "Techne Indonesia", scripts: ["bard.js"] });
  }
}

module.exports = new ViewController();
