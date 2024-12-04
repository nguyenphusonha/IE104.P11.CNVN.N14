const express = require("express");
const productsController = require("../controllers/products.controller.js");
const router = express.Router();

router.route("/").get(productsController.getProducts);
router.route("/:id").get(productsController.getProduct);
module.exports = router;
