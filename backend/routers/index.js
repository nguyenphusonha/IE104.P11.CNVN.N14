const productsRouter = require("./products.router");
const homepageRouter = require("./homepage.router");

const route = (app) => {
  app.use("/products", productsRouter);
  app.use("/view/homepage",homepageRouter);
};

module.exports = route;
