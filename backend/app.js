const express = require("express");
const app = express();

app.use(express.json());

app.listen(3000, () => {
  console("server running on 3000");
});
