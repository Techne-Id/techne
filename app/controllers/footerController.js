"use strict";

class FooterController {
  async privacyPolicy(req, res, next) {
    console.log(req.user);
    var user = "";
    if (req.user) {
      var user = req.user;
    }
    res.render("layout", { body: "./page/privacyPolicy", title: "Techne Indonesia", data: { user: user }, scripts: [] });
  }
  async term(req, res, next) {
    console.log(req.user);
    var user = "";
    if (req.user) {
      var user = req.user;
    }
    res.render("layout", { body: "./page/term", title: "Techne Indonesia", data: { user: user }, scripts: [] });
  }
  async about(req, res, next) {
    console.log(req.user);
    var user = "";
    if (req.user) {
      var user = req.user;
    }
    res.render("layout", { body: "./page/about", title: "Techne Indonesia", data: { user: user }, scripts: [] });
  }
}

module.exports = new FooterController();
