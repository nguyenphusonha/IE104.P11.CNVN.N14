const express = require("express");
const router = express.Router();
const model = require("../models/index");

router.route("/").get(async (req, res) => {
  const products = await model.product.find();
  res.render("page/homepage.ejs", { products: products });
});
router.route("/laptop").get(async (req, res) => {
  const products = await model.product.find({ category: "laptop" });
  res.render("page/homepage.ejs", { products: products });
});
router.route("/headsphone").get(async (req, res) => {
  const products = await model.product.find({ category: "headsphone" });
  res.render("page/homepage.ejs", { products: products });
});
router.route("/screen").get(async (req, res) => {
  const products = await model.product.find({ category: "screen" });
  res.render("page/homepage.ejs", { products: products });
});
router.route("/mouse").get(async (req, res) => {
  const products = await model.product.find({ category: "mouse" });
  res.render("page/homepage.ejs", { products: products });
});
module.exports = router;
