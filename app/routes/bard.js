const express = require("express");
const BardController = require("../controllers/bardController");
const router = express.Router();

router.get("/:prompt", BardController.getByPrompt);

// router.route("/").get(getMateri);
// router.get("/", (req, res) => {
//   console.log("materi route");
//   materiController.getMateri();
//   next();
// });

module.exports = router;
