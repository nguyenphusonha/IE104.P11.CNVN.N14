const mongoose = require("mongoose");
const productsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Must above zero"],
    },
    imgName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: [String],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Product", productsSchema);
