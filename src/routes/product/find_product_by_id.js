const express = require("express");
const { Product } = require("../../models/product");

const find_product_by_id = express.Router();
find_product_by_id.get("/id/:id", async (req, res) => {
  try {
    const product_id = req.params.id;
    if (!product_id)
      throw new Error("Uma parametro deve ser passado para consulta");
    const product_id_parsed = parseInt(product_id);
    if (typeof product_id_parsed !== "number")
      throw new Error("O Product_ID tem que ser um numero");
    const search = await Product.findOne({
      where: {
        Product_ID: parseInt(product_id),
      },
    });
    if (search)
      if (search.dataValues) {
        return res.send(search.dataValues);
      }

    return res.status(404).send({
      errorCode: 404,
      message: "Nenhum produto foi encontrado com baseado nesse Product_ID",
      param: req.params.id,
    });
  } catch (error) {
    return res.status(400).send({
      errorCode: 400,
      message: error.message,
      param: req.params.id,
    });
  }
});

module.exports = { find_product_by_id };
