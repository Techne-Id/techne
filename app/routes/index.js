const express = require("express");
const materiRouter = require("./materi");
const markdownRouter = require("./markdown");
const viewRouter = require("./view");
const kuisRouter = require("./kuis");

// const usersRouter = require("./users");
// const authRouter = require("./auth");

const router = express.Router();

// router.get("/", function (req, res, next) {
//   res.render("./page/index2", { body: "./page/materi", title: "express", scripts: ["materi.js"] });
// });

// API
router.use("/api/materi", materiRouter);
router.use("/api/markdown", markdownRouter);
router.use("/api/kuis", kuisRouter);

// VIEW
router.use("/", viewRouter);

// router.use("/users", usersRouter);
// router.use("/auth", authRouter);

module.exports = router;
