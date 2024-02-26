const express = require("express");
const ViewController = require("../controllers/viewController");
const FooterController = require("../controllers/footerController");
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

router.get("/privacy-policy", FooterController.privacyPolicy);
router.get("/term", FooterController.term);
router.get("/about", FooterController.about);

module.exports = router;
