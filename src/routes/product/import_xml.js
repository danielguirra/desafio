const express = require("express");
const xml2js = require("xml2js");
const fs = require("fs");
const { Product } = require("../../models/product");
const importXml = express.Router();

importXml.use(express.text({ type: "application/xml" }));

importXml.post("/xml", async (req, res) => {
  try {
    const xml = await xml2js.parseStringPromise(req.body);
    if (!xml)
      throw new Error("Não foi possivel identificar o corpo da requisição");
    if (!xml.Products) throw new Error("O XML não possui Products");
    if (!xml.Products.Product) throw new Error("O XML não possui Product");
    for (const key in xml.Products.Product) {
      if (Object.hasOwnProperty.call(xml.Products.Product, key)) {
        const unorganized_product = xml.Products.Product[key];
        const organized_product = organizeProduct(unorganized_product);
        const verify_duplicidade = await Product.findOne({
          where: {
            Product_ID: organized_product.Product_ID,
          },
        });
        if (verify_duplicidade)
          if (
            verify_duplicidade.dataValues.Product_ID ==
            organized_product.Product_ID
          )
            throw new Error(
              "Ja existe o produto com ID " + organized_product.Product_ID
            );
        const save = await Product.create(organizeProduct(unorganized_product));
      }
    }
    return res.status(200).send("Dados XML processados com sucesso");
  } catch (error) {
    return res.status(400).send({
      errorCode: 400,
      message: error.message,
    });
  }
});

module.exports = { importXml };
function organizeProduct(array) {
  return {
    Product_ID: parseInt(array.Product_ID[0]),
    SKU: array.SKU[0],
    Name: array.Name[0],
    Product_URL: array.Product_URL[0],
    Price: parseFloat(array.Price[0]),
    Retail_Price: parseFloat(array.Retail_Price[0]),
    Thumbnail_URL: array.Thumbnail_URL[0],
    Search_Keywords: array.Search_Keywords[0],
    Description: array.Description[0],
    Category: array.Category[0],
    Category_ID: parseInt(array.Category_ID[0]),
    Brand: array.Brand[0],
    Child_SKU: array.Child_SKU[0],
    Child_Price: array.Child_Price[0],
    Color: array.Color[0],
    Color_Family: array.Color_Family[0],
    Color_Swatches: array.Color_Swatches[0],
    Size: array.Size[0],
    Shoe_Size: array.Shoe_Size[0],
    Pants_Size: array.Pants_Size[0],
    Occassion: array.Occassion[0],
    Season: array.Season[0],
    Badges: array.Badges[0],
    Rating_Avg: parseFloat(array.Rating_Avg[0]),
    Rating_Count: parseInt(array.Rating_Count[0]),
    Inventory_Count: parseInt(array.Inventory_Count[0]),
    Date_Created: array.Date_Created[0],
  };
}
