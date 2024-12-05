const products = require("./products.router");
const site = require("./site.router");

const route = (app) => {
  app.use("/products", products);
  app.use("/", site);
};

module.exports = route;
