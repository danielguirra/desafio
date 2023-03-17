const express = require("express");
const { Op } = require("sequelize");
const { Product } = require("../../models/product");

const find_product_by_beetween_date = express.Router();
find_product_by_beetween_date.get("/beetween", async (req, res) => {
  let { startDate, endDate, productsPerPage, page } = req.query;
  try {
    if (
      typeof startDate !== "string" ||
      startDate == "" ||
      !new Date(startDate)
    )
      throw new Error("startDate deve ser uma string de timestamp");
    new Date(startDate).toISOString();
    if (!endDate)
      endDate = new Date().toISOString().slice(0, 19).replace("T", " ");
    new Date(endDate).toISOString();
    if (typeof endDate !== "string" || endDate == "" || !new Date(endDate))
      throw new Error("endDate deve ser uma string de timestamp");

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
      productsPerPage = 1;
    }

    let offset = (page - 1) * productsPerPage;
    if (page == 1) offset = 0;
    if (page == 0) offset = undefined;
    const products = await Product.findAndCountAll({
      where: {
        Date_Created: {
          [Op.between]: [startDate, endDate],
        },
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
    if (error.message === "Invalid time value")
      error.message = "Data em formato invalido";
    return res.status(400).send({
      errorCode: 400,
      message: error.message,
      querys: {
        endDate,
        startDate,
        productsPerPage,
        page,
      },
    });
  }
});

module.exports = { find_product_by_beetween_date };
