const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const app = express();
mongoose
  .connect("mongodb://localhost:27017/N14")
  .then((e) => console.log("Connect to mongodb success"))
  .catch((e) => console.log(e));

app.use(express.json());

const __dirNameList = __dirname.split("\\");
const __rootDir = __dirNameList.slice(0, -1).join("\\");
const __viewsDir = __rootDir + "\\frontend\\views";
const __publicDir = __rootDir + "\\frontend\\public";

app.use(express.static(__publicDir));

//set view engine
app.set("views", __viewsDir);
app.set("view engine", "ejs");

app.use("/", (req, res) => {
  res.render("page/home/homepage.ejs");
});
app.use("/login", (req, res) => {
  console.log("Hello");
});
console.log(__publicDir);
app.listen(3000, () => {
  console.log("server running on 3000");
});
