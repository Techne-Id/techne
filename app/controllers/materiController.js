"use strict";

const Materi = require("../models/materi");
const md = require("markdown-it")({
  html: true,
  linkify: true,
  typographer: true,
});

md.use(require("markdown-it-attrs"));
md.use(require("markdown-it-anchor"));
// md.use(require("markdown-it-anchor").default);
md.use(require("markdown-it-table-of-contents"), {
  includeLevel: [2, 3, 4],
});

class MateriController {
  // GET MATERI ALL
  async getMateri(req, res, next) {
    let getData = await Materi.findAll().catch((err) => err);
    // console.log("GET: ", getData);

    res.status(200).json(getData);
  }

  // GET MATERI FOLDER
  async getMateriParent(req, res, next) {
    const parent = req.params.parent;
    const child = req.query.child;
    if (child && parent == 1) {
      var getData = await Materi.findChild(child).catch((err) => err);
    } else {
      var getData = await Materi.findParent(parent).catch((err) => err);
    }

    res.status(200).json(getData);
  }
  // GET MATERI CHILD
  async getMateriChild(req, res, next) {
    const parent = req.params.parent;
    let getData = await Materi.findChild(parent).catch((err) => err);
    // console.log("GET: ", getData);

    res.status(200).json(getData);
  }

  // GET MATERI FILE
  async getMateriFile(req, res, next) {
    const parent = req.params.parent;
    const file = req.params.materi;
    let getData = await Materi.findFile(parent, file).catch((err) => err);
    // console.log("GET: ", getData);

    res.status(200).json(getData);
  }

  async readMarkdown(req, res, next) {
    const fs = require("fs");

    const parent = req?.params?.parent;

    let getDataParent = await Materi.findParent(parent).catch((err) => err);
    const parentPath = getDataParent.data[0].path;

    // const path = String.raw`C:/Users/ichoi/OneDrive/Documents/ISHAMASHI/Project/materi/intermediate_html_css/intermediate_html_concepts/emmet.md`;
    const path = String.raw`C:/Users/ishamashi/Documents/ISHAMASHI/Project/materi`;
    // const testFolder = path + parentPath + "README.md";
    const testFolder = path + parentPath + "emmet.md";

    const file = fs.readFileSync(testFolder, { encoding: "utf8", flag: "r" });
    let getData = md.render(file);

    res.status(200).json({ parse: getData, raw: file });
  }
}

module.exports = new MateriController();
