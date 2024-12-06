const express = require("express");
const router = express.Router();
const model = require("../models/index");

router.route("/").get(async (req, res) => {
  const products = await model.product.find().limit(5);
  res.render("page/homepage.ejs", { products: products });
});
router.route("/testquery").get(async (req, res) => {
  const querydata = { ...req.query };
  console.log(querydata);
  const products = await model.product.find(querydata);
  res.json(products);
});
module.exports = router;
