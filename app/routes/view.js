const express = require("express");
const ViewController = require("../controllers/viewController");
const router = express.Router();

router.get("/", ViewController.index);
router.get("/belajar", ViewController.belajar);
router.get("/belajar/modul", ViewController.modul);
router.get("/belajar/modul/:modul", ViewController.materi);
router.get("/belajar/modul/:modul/:file", ViewController.file);

module.exports = router;
