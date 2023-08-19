// const { Pool } = require('pg');
// import { crud } from './curd'

const { ifError } = require("assert");
const Crud = require("./curd.js");

const folder = async function () {
  // let data = await Crud.get("materi", "*");
  // console.log("AS", data);

  // let inputtes = await Crud.input("materi", "name, type, path", "'tes2', 'folder', '\/'");
  // console.log("INPUT", inputtes)

  itung = 0;
  masuk = "/";
  const path = String.raw`C:/Users/ishamashi/Documents/ISHAMASHI/Project/materi`;

  const select = async function () {
    let data = await Crud.get("materi", "*", "WHERE type = '1'");
    data.forEach((element) => {
      var name = element["name"].replaceAll("_", "-");
      var split = element["path"].split("/");
      var last = split[split.length - 2];
      var parent = last.replaceAll("_", "-");

      var slug = element["name"].split(".")[0];

      // if (element["parent"] == "0") {
      // var slug = name;
      // } else {
      //   var slug = parent + "-" + name;
      // }

      console.log({ ID: element["id"], Name: name, Slug: slug, Parent: parent });
      Crud.update("materi", "slug", `'${slug}'`, `WHERE id = ${element["id"]}`);
    });
    // console.log("AS", data);
  };
  select();

  const input = async function (masuk = "/", parent = "") {
    const testFolder = path + masuk;
    const fs = require("fs");

    fs.readdir(testFolder, { withFileTypes: true }, (err, files) => {
      // console.log("INI BOS", testFolder)
      if (err) throw err;
      if (files.length > 0) {
        files.forEach((file) => {
          itung = itung + 1;
          if (file.isDirectory() && file.name.at(0) != ".") {
            var masukbaru = masuk + file.name + "/";
            input(masukbaru, itung);
          }
          Crud.input("materi", "id, parent, name, type, path", `${itung}, ${parent ? parent : 0}, '${file.name}', '${file.isDirectory() ? "0" : "1"}', '${masuk}'`);
          // console.log({'name': file.name, directory: file.isDirectory(), path: masuk, parent: parent, id: itung})
        });
      }
    });
  };

  // input();
};

folder();
