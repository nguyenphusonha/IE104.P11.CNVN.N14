const express = require("express");
const router = express.Router();
const Product = require("../models/products.model");
const Category = require("../models/category.model");
router.get("/", async (req, res) => {
  const productList = await Product.find().populate("category");
  if (!productList) {
    res.status(500).json({ success: false });
  }
  res.send(productList);
});
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id).populate("category");
  if (!product) {
    res.status(500).json({ success: false });
  }
  res.send(product);
});
router.delete("/:id", (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then((product) => {
      if (product) {
        return res
          .status(200)
          .json({ sucees: true, message: "The product was deteted" });
      } else {
        return res
          .status(404)
          .json({ sucees: false, message: "No product with id" });
      }
    })
    .catch((err) => {
      return res.status(400).json({ sucees: false, error: err });   
    });
});
router.post("/", async (req, res) => {
  const category = await Category.findById(req.body.category);
  if (!category) return res.status(400).send("Invalid category");
  let product = new Product({
    name: req.body.name,
    price: req.body.price,
    imgName: req.body.imgName,
    brand: req.body.brand,
    category: req.body.category,
    description: [...req.body.description],
    isFeatured: req.body.isFeatured,
  });
  product = await product.save();
  if (!product) {
    return res.status(400).send("The product cannot created");
  }
  res.send(product);
});
module.exports = router;
