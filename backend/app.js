const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const route = require("./routers/index");
const app = express();

const User = require("./models/users.model");

const Products = require("./models/products.model");
mongoose
  .connect("mongodb://localhost:27017/N14")
  .then((e) => console.log("Connect to mongodb success"))
  .catch((e) => console.log(e));

app.use(express.json());

const __dirNameList = __dirname.split("\\");
const __rootDir = __dirNameList.slice(0, -1).join("\\");
const __viewsDir = __rootDir + "\\frontend\\views";
const __publicDir = __rootDir + "\\frontend\\public";
app.use(express.static(__publicDir));
console.log(__publicDir);
//set view engine
app.set("views", __viewsDir);
app.set("view engine", "ejs");

route(app);
app.post("/user", async (req, res) => {
  const newUser = new User({
    username: "johndoe",
    email: "john@example.com",
    password: "securepassword123",
    cart: [
      { product: "639efb9c9f4e9d2b40a88b11", quantity: 2, price: 29.99 },
      { product: "639efb9c9f4e9d2b40a88b12", quantity: 1, price: 49.99 },
    ],
  });
  await newUser.save();
  console.log("User created:", newUser);

  // Calculate the total value of the cart
  const cartTotal = newUser.calculateCartTotal();
  res.status(200).json("Cart Total:" + cartTotal);
});
app.listen(3000, () => {
  console.log("server running on 3000");
});
