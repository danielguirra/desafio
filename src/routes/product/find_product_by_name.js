const express = require("express");
const { Product } = require("../../models/product");

const find_product_by_name = express.Router();
find_product_by_name.get("/name", async (req, res) => {
  let { productsPerPage, page, name } = req.query;

  try {
    if (page) {
      if (typeof page !== "string" || page == "" || page == "0")
        throw new Error("query page deve ser uma string de um numero valido");
      page = parseInt(page);
    } else {
      page = 0;
    }

    if (productsPerPage) {
      if (
        typeof productsPerPage !== "string" ||
        productsPerPage == "" ||
        productsPerPage == "0"
      )
        throw new Error(
          "query productsPerPage deve ser uma string de um numero"
        );
      productsPerPage = parseInt(productsPerPage);
    } else {
      productsPerPage = 1;
    }

    let offset = (page - 1) * productsPerPage;
    if (page == 1) offset = 0;
    if (page == 0) offset = undefined;
    const products = await Product.findAndCountAll({
      where: {
        Name: name,
      },
      limit: productsPerPage,
      offset,
    });

    if (products.rows.length <= 0)
      return res.status(404).send({
        errorCode: 404,
        message: "Nenhum produto foi encontrado nessa pagina",
        maxPage: Math.ceil(products.count / productsPerPage),
        totalProducts: products.count,
        page,
        productsPerPage,
      });

    return res.status(200).send({
      totalProducts: products.count,
      maxPage: Math.ceil(products.count / productsPerPage),
      productsInPage: products.rows.length,
      page: page,
      productsPerPage,
      products: products.rows,
    });
  } catch (error) {
    return res.status(400).send({
      errorCode: 400,
      message: error.message,
      querys: {
        name,
        productsPerPage,
        page,
      },
    });
  }
});

module.exports = { find_product_by_name };
