const express = require("express");
const router = express.Router();

router.route("/").get(async (req, res) => {
  const products = await fetch("http://localhost:3000/products/").then((res) =>
    res.json()
  );
  res.render("components/product-list.ejs", { products: products });
});
module.exports = router;
