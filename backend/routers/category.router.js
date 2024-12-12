const express = require("express");
const Category = require("../models/category.model");
const { category } = require("../models");
const router = express.Router();

router.get("/", async (req, res) => {
  const categoryList = await Category.find();
  if (!categoryList) {
    res.status(500).json({ sucees: false });
  }
  res.send(categoryList);
});

router.post("/", async (req, res) => {
  let category = new Category({
    name: req.body.name,
  });
  category = await category.save();
  if (!category) {
    return res.status(400).send("The category cannot created");
  }
  res.send(category);
});

router.delete("/:id", (req, res) => {
  Category.findByIdAndDelete(req.params.id)
    .then((category) => {
      if (category) {
        return res
          .status(200)
          .json({ sucees: true, message: "The category was deteted" });
      } else {
        return res
          .status(404)
          .json({ sucees: false, message: "No category with id" });
      }
    })
    .catch((err) => {
      return res.status(400).json({ sucees: false, error: err });
    });
});
module.exports = router;
