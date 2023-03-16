const express = require("express");
const { Product } = require("./models/product");
const { importXml } = require("./routes/import_xml");

const app = express();

app.use(importXml);

app.listen(3000, async () => {
  await Product.sync();

  console.log("ok");
});
