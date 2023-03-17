const express = require("express");
const { sequelize } = require("./database/connection");
const { importXml } = require("./routes/product/import_xml");
const { v1 } = require("./routes/product/routes_product");
const app = express();

app.use(importXml);
app.use("/v1", v1);
app.listen(3000, () => {
  sequelize.sync().then(() => {
    console.log("O Banco foi sincronizado");
  });

  console.log("API está rodando na porta 3000");
});
