const express = require("express");
const path = require("path");
const cors = require("cors");

const indexRouter = require("./routes/index");

const app = express();
const port = 3000;

app.use(cors());
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));

app.use(express.static(path.join(__dirname, "assets")));

app.use("/", indexRouter);

app.listen(port, () => console.log(`listen at port:${port}`));
