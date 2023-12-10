"use strict";

require("dotenv").config();
const Materi = require("../models/materi");
const fs = require("fs");
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

class MarkdownController {
  async getMarkdown(req, res, next) {
    try {
      const parent = req?.params?.parent;
      const fileSlug = req?.params?.fileName;

      let getData = await Materi.findFile(parent, fileSlug).catch((err) => err);

      const parentPath = getData.data[0].path;
      const fileName = getData.data[0].name;

      const path = process.env.MATERI_PATH;
      // String.raw`C:/Users/ichoi/OneDrive/Documents/ISHAMASHI/Project/materi`;
      const testFolder = path + parentPath + fileName;

      const file = fs.readFileSync(testFolder, { encoding: "utf8", flag: "r" });
      let data = md.render(file);
      res.status(200).json({ parse: data, raw: file, data: getData.data[0] });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new MarkdownController();
