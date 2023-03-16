import express from "express";
import { Product } from "../models/product";

export const find_product_by_name = express.Router();
find_product_by_name.get("/name", async (req, res) => {
  let { limit, name, page } = req.query;

  const finder = Product.findAndCountAll({ where: name, limit });
});
