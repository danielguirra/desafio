import express from "express";

export const find_product_by_id = express.Router();
find_product_by_id.get("/id", async (req, res) => {});
