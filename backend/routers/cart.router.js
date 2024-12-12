const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { productId, quantity } = req.body;

  if (!req.session.cart) {
    req.session.cart = [];
  }

  const existingItem = req.session.cart.find(
    (item) => item.productId === productId
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    req.session.cart.push({ productId, quantity });
  }

  res.json({ message: "Product added to cart", cart: req.session.cart });
});

router.post("/remove", (req, res) => {
  const { productId } = req.body;

  if (req.session.cart) {
    req.session.cart = req.session.cart.filter(
      (item) => item.productId !== productId
    );
  }

  res.json({ message: "Product removed from cart", cart: req.session.cart });
});

router.post("/clear", (req, res) => {
  req.session.cart = [];
  res.json({ message: "Cart cleared" });
});

module.exports = router;
