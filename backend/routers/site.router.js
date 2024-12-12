const express = require("express");
const router = express.Router();
const model = require("../models/index");

require("dotenv/config");

const api = process.env.API_URL;
router.route("/").get(async (req, res) => {
  const baseUrl = `${req.protocol}://${req.get("host")}${req.baseUrl}`;
  const apiUrl = `${baseUrl}${api}`;
  const products = await fetch(`${apiUrl}/product`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => data.json())
    .catch((err) => console.log(err));
  res.render("page/homepage.ejs", { products: products });
});
module.exports = router;
