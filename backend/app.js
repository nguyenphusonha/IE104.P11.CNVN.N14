const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routers/index");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv/config");

app.use(cors());
app.options("*", cors());
//middleware
app.use(bodyParser.json());

mongoose
  .connect(process.env.CONNECTION_STRING, {
    dbName: "Lapshop",
  })
  .then((e) => console.log("Connect to mongodb success"))
  .catch((e) => console.log(e));

const __dirNameList = __dirname.split("\\");
const __rootDir = __dirNameList.slice(0, -1).join("\\");
const __viewsDir = __rootDir + "\\frontend\\views";
const __publicDir = __rootDir + "\\frontend\\public";
app.use(express.static(__publicDir));
console.log(__publicDir);
//set view engine
app.set("views", __viewsDir);
app.set("view engine", "ejs");
//set route
route(app);
app.listen(+process.env.PORT, () => {
  console.log("server running on 3000");
});
