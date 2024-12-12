const express = require("express");
const Order = require("../models/order.model");
const OrderItem = require("../models/order-item.model");
const router = express.Router();

// router.get("/", async (req, res) => {
//   const categoryList = await Category.find();
//   if (!categoryList) {
//     res.status(500).json({ sucees: false });
//   }
//   res.send(categoryList);
// });

router.post("/", async (req, res) => {
  const orderItemsIds = Promise.all(
    req.body.orderItems.map(async (orderItem) => {
      let newOrderItem = new OrderItem({
        quantity: orderItem.quantity,
        product: orderItem.product,
      });
      newOrderItem = await newOrderItem.save();
      return newOrderItem._id;
    })
  );
  const orderItemsIdsResolved = await orderItemsIds;
  const totalPrices = await Promise.all(
    orderItemsIdsResolved.map(async (orderItemId) => {
      const orderItem = await OrderItem.findById(orderItemId).populate(
        "product",
        "price"
      );
      const totalPrice = orderItem.product.price * orderItem.quantity;
      return totalPrice;
    })
  );
  const totalPrice = totalPrices.reduce((a, b) => a + b, 0);
  let order = new Order({
    user: req.body.user,
    orderItems: orderItemsIdsResolved,
    totalPrice: totalPrice,
    status: req.body.status,
    paymentMethod: req.body.paymentMethod,
    shippingAddress: req.body.shippingAddress,
  });
  order = await order.save();
  if (!order) {
    return res.status(400).send("The order cannot created");
  }
  res.send(order);
});

// router.delete("/:id", (req, res) => {
//   Category.findByIdAndDelete(req.params.id)
//     .then((category) => {
//       if (category) {
//         return res
//           .status(200)
//           .json({ sucees: true, message: "The category was deteted" });
//       } else {
//         return res
//           .status(404)
//           .json({ sucees: false, message: "No category with id" });
//       }
//     })
//     .catch((err) => {
//       return res.status(400).json({ sucees: false, error: err });
//     });
// });
module.exports = router;
