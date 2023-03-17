const express = require("express");
const xml2js = require("xml2js");
const { Product } = require("../../models/product");

const findAll = express.Router();

findAll.get("/findAll", async (req, res) => {
  let { productsPerPage, page } = req.query;

  try {
    if (page) {
      if (typeof page !== "string" || page == "" || page == "0")
        throw new Error("page deve ser uma string de um numero valido");
      page = parseInt(page);
    } else {
      page = 0;
    }

    if (productsPerPage) {
      if (typeof productsPerPage !== "string" || productsPerPage == "")
        throw new Error("page deve ser uma string de um numero");
      productsPerPage = parseInt(productsPerPage);
    } else {
      productsPerPage = undefined;
    }

    let offset = (page - 1) * productsPerPage;
    if (page == 1) offset = 0;
    if (page == 0) offset = undefined;
    const { rows, count } = await Product.findAndCountAll({
      limit: productsPerPage,
      offset,
    });
    if (rows.length <= 0)
      return res.status(404).send({
        errorCode: 404,
        message: "Nenhum produto foi encontrado nessa pagina",
        maxPage: Math.ceil(count / productsPerPage),
        totalProducts: count,
        page,
        productsPerPage,
      });

    return res.status(200).send({
      productsInPage: rows.length,
      maxPage: Math.ceil(count / productsPerPage),
      totalProducts: count,
      page,
      productsPerPage,
      products: rows,
    });
  } catch (error) {
    return res.status(404).send({
      errorCode: 404,
      message: error.message,
      page,
      productsPerPage,
    });
  }
});

module.exports = { findAll };
