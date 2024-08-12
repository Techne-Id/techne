"use strict";

class ViewController {
  // BASE PAGE
  async index(req, res, next) {
    console.log(req.user);
    var user = "";
    if (req.user) {
      var user = req.user;
    }
    var ads = ''
    res.render("layout", { body: "./page/index", title: "Techne Indonesia", ads:ads, data: { user: user }, scripts: [] });
  }
  async login(req, res, next) {
    var ads = ''
    res.render("blank", { body: "./page/login", title: "Techne Indonesia", ads:ads, scripts: ["login.js"] });
  }
  async register(req, res, next) {
    var ads = ''
    res.render("blank", { body: "./page/register", title: "Techne Indonesia", ads:ads, scripts: ["register.js"] });
  }

  // KUIS PAGE
  async kuis(req, res, next) {
    console.log(req.user);
    var user = "";
    if (req.user) {
      var user = req.user;
    }
    var ads = ''
    res.render("layout", { body: "./page/kuis", title: "Techne Indonesia", ads:ads, data: { user: user }, scripts: [] });
  }
  async tags(req, res, next) {
    console.log(req.user);
    var user = "";
    if (req.user) {
      var user = req.user;
    }
    res.render("layout", { body: "./page/tags", title: "Techne Indonesia", ads:ads, data: { user: user }, scripts: ["quis.js"] });
  }
  async soal(req, res, next) {
    console.log(req.user);
    var user = "";
    if (req.user) {
      var user = req.user;
    }
    var ads = ''
    res.render("layout", { body: "./page/soal", title: "Techne Indonesia", ads:ads, data: { user: user }, scripts: [] });
  }

  // BELAJAR PAGE
  async belajar(req, res, next) {
    console.log(req.user);
    var user = "";
    if (req.user) {
      var user = req.user;
    }
    var ads = ''
    res.render("layout", { body: "./page/belajar", title: "Techne Indonesia", ads:ads, data: { user: user }, scripts: [] });
  }
  async modul(req, res, next) {
    console.log(req.user);
    var user = "";
    if (req.user) {
      var user = req.user;
    }
    var ads = ''
    res.render("layout", { body: "./page/materi", title: "Techne Indonesia", ads:ads, data: { user: user }, scripts: ["modul.js"] });
  }
  async materi(req, res, next) {
    console.log(req.user);
    var user = "";
    if (req.user) {
      var user = req.user;
    }
    var ads = ''
    res.render("layout", { body: "./page/modul", title: "Techne Indonesia", ads:ads, data: { user: user }, scripts: ["materi.js"] });
  }
  async file(req, res, next) {
    console.log(req.user);
    var user = "";
    if (req.user) {
      var user = req.user;
    }
    var ads = ''
    res.render("layout", { body: "./page/file", title: "Techne Indonesia", ads:ads, data: { user: user }, scripts: ["file.js"] });
  }

  // BARD PAGE
  async bard(req, res, next) {
    console.log(req.user);
    var user = "";
    if (req.user) {
      var user = req.user;
    }
    var ads = ''
    res.render("layout", { body: "./page/bard", title: "Techne Indonesia", ads:ads, data: { user: user }, scripts: ["bard.js"] });
  }
}

module.exports = new ViewController();
