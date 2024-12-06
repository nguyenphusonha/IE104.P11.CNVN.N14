const Products = require("../models/products.model.js");

const getProducts = async (req, res) => {
  try {
    const products = await Products.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Products.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "No product with this id" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const postProducts = async (req, res) => {
  try {
    if (!Array.isArray(req.body.products)) {
      return res.status(400).json({ error: "Expected an array of products." });
    }
    const insertProducts = req.body.products;
    const products = await Products.insertMany(insertProducts);
    res.status(201).json(products);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
module.exports = {
  getProducts,
  getProduct,
  postProducts,
};
