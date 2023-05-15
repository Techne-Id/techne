const express = require("express");
const MateriController = require("../controllers/materiController");
// const models = require("../models/models");

// const { Materi } = models;

const router = express.Router();

router.get("/", MateriController.getMateri);
router.get("/:parent", MateriController.getMateriParent);
router.get("/:parent/:materi", MateriController.getMateriFile);

// router.route("/").get(getMateri);
// router.get("/", (req, res) => {
//   console.log("materi route");
//   materiController.getMateri();
//   next();
// });

module.exports = router;
