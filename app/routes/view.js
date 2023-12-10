const express = require("express");
const ViewController = require("../controllers/viewController");
const router = express.Router();

router.get("/", ViewController.index);

router.get("/bard/:prompt", ViewController.bard);

router.get("/belajar", ViewController.belajar);

router.get("/belajar/modul", ViewController.modul);
router.get("/belajar/modul/:modul", ViewController.materi);
router.get("/belajar/modul/:modul/:file", ViewController.file);

router.get("/belajar/kuis", ViewController.kuis);
router.get("/belajar/kuis/:tags", ViewController.tags);
router.get("/belajar/kuis/:modul/:file", ViewController.soal);

module.exports = router;
