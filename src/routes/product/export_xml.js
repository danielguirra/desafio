const express = require("express");
const xmlbuilder = require("xmlbuilder");
const { Product } = require("../../models/product");
const { attribute } = require("../../util/ProductAttributes");

const exportXml = express.Router();

exportXml.get("/export", async (req, res) => {
  try {
    const products = await Product.findAll();
    const root = xmlbuilder.create("Products");
    const product_attributes = attribute;
    for (const product of products) {
      const productElement = root.ele("Product");

      for (const iterator of product_attributes) {
        if (typeof product.dataValues[iterator] !== "string") {
          product.dataValues[iterator] =
            product.dataValues[iterator].toString();
        }

        productElement.ele(iterator, {}, product.dataValues[iterator]);
      }
    }

    const xml = root.end({ pretty: true });

    res.set("Content-Type", "application/xml");
    return res.send(xml);
  } catch (error) {
    return res.status(404).send({
      errorCode: 404,
      message: error.message,
    });
  }
});

module.exports = { exportXml };
