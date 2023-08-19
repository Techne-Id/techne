const express = require("express");
const ViewController = require("../controllers/viewController");
const router = express.Router();

router.get("/", ViewController.index);
router.get("/login", ViewController.login);
router.get("/register", ViewController.register);

router.get("/belajar", ViewController.belajar);

router.get("/belajar/modul", ViewController.modul);
router.get("/belajar/modul/:modul", ViewController.materi);
router.get("/belajar/modul/:modul/:file", ViewController.file);

router.get("/belajar/kuis", ViewController.kuis);
router.get("/belajar/kuis/:tags", ViewController.materi);
router.get("/belajar/kuis/:modul/:file", ViewController.file);

module.exports = router;
