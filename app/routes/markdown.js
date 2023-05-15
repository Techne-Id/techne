const express = require("express");
const MateriController = require("../controllers/markdownController");
const router = express.Router();

router.get("/:parent/:fileName", MateriController.getMarkdown);

// router.route("/").get(getMateri);
// router.get("/", (req, res) => {
//   console.log("materi route");
//   materiController.getMateri();
//   next();
// });

module.exports = router;
