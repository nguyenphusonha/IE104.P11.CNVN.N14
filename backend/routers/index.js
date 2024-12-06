const category = require("./category.router");
const product = require("./products.router");
const site = require("./site.router");
require("dotenv/config");
const api = process.env.API_URL;
const route = (app) => {
  app.use(`${api}/category`, category);
  app.use(`${api}/product`, product);
  app.use("/", site);
};

module.exports = route;
