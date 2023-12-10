const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
// const expressLayouts = require("express-ejs-layouts");

const path = require("path");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const session = require("express-session");
const app = express();

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "SECRET",
  })
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

app.get("/success", (req, res) => res.send(userProfile));
app.get("/error", (req, res) => res.send("error logging in"));

require("./passport-google"); // Ubah sesuai dengan nama file konfigurasi strategi
require("./passport-github"); // Ubah sesuai dengan nama file konfigurasi strategi

// Middleware Passport.js
app.use(passport.initialize());
// app.use(passport.session());

app.use(cors());
app.use(morgan("dev"));
// app.use(expressLayouts);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cookieParser());
app.use("/assets", express.static("assets"));
app.use(express.static(path.join(__dirname, "assets")));

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use("/", indexRouter);

app.use((req, res, next) => {
  res.json({ message: "404" });
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.json({ error: err });
});

module.exports = app;
