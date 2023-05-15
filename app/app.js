const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
// const expressLayouts = require("express-ejs-layouts");

const path = require("path");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(morgan("dev"));
// app.use(expressLayouts);
app.use(bodyParser.json());

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
