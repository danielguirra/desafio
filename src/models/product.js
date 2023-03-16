const { Sequelize } = require("sequelize");
const { sequelize } = require("../database/connection");

const Product = sequelize.define("Product", {
  Id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Product_ID: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: true,
    primaryKey: true,
  },
  SKU: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  Product_URL: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  Price: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  Retail_Price: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  Thumbnail_URL: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  Search_Keywords: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  Description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  Category: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  Category_ID: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  Brand: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  Child_SKU: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  Child_Price: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  Color: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  Color_Family: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  Color_Swatches: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  Size: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  Shoe_Size: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  Pants_Size: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  Occassion: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  Season: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  Badges: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  Rating_Avg: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  Rating_Count: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  Inventory_Count: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  Date_Created: {
    type: Sequelize.DATE,
    allowNull: true,
  },
});

module.exports = { Product };
