const express = require("express");
const KuisController = require("../controllers/kuisController");
const router = express.Router();

router.get("/:tags", KuisController.getByTags);

// router.route("/").get(getMateri);
// router.get("/", (req, res) => {
//   console.log("materi route");
//   materiController.getMateri();
//   next();
// });

module.exports = router;
