const category = require("./category.router");
const product = require("./products.router");
const user = require("./user.router");
const site = require("./site.router");
const order = require("./order.router");
require("dotenv/config");
const api = process.env.API_URL;
const route = (app) => {
  app.use(`${api}/category`, category);
  app.use(`${api}/product`, product);
  app.use(`${api}/user`, user);
  app.use(`${api}/order`, order);
  app.use("/", site);
};

module.exports = route;
