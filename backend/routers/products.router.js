const express = require("express");
const router = express.Router();
const Product = require("../models/products.model");
router.get("/", async (req, res) => {
  const productList = await Product.find();
  if (!productList) {
    res.status(500).json({ success: false });
  }
  res.send(productList);
});
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(500).json({ success: false });
  }
  res.send(Product);
});
module.exports = router;
