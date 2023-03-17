const express = require("express");
const { exportXml } = require("./export_xml");
const { findAll } = require("./find_all_product");
const {
  find_product_by_beetween_date,
} = require("./find_product_by_beetween_date");
const { find_product_by_id } = require("./find_product_by_id");
const { find_product_by_name } = require("./find_product_by_name");
const { importXml } = require("./import_xml");

const v1 = express.Router();
const routes_Product = [
  find_product_by_beetween_date,
  find_product_by_id,
  find_product_by_name,
  findAll,
  importXml,
  exportXml,
];

for (const route of routes_Product) {
  v1.use("/product", route);
}

module.exports = { v1 };
