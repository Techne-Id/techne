const express = require("express");
const AuthController = require("../controllers/authController");

const router = express.Router();
const passport = require("passport");

router.post("/login", AuthController.login);
// router.post("/logout", AuthController.logout);
router.post(
  "/logout",
  function (req, res, next) {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      // res.redirect("/");
    });
  },
  AuthController.logout
);
router.post("/register", AuthController.register);

// Routes untuk otentikasi
router.get("/github", passport.authenticate("github", { scope: ["user:email"] }));
router.get("/github/callback", passport.authenticate("github", { failureRedirect: "/login" }), AuthController.githubCallback);

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/login" }), AuthController.googleCallback);

module.exports = router;
