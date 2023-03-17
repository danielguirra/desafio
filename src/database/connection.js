const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const dbName = process.env.DATABASE_NAME;
const dbUser = process.env.DATABASE_USER;
const dbHost = process.env.DATABASE_HOST;
const dbPassword = process.env.DATABASE_PASSWORD;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "mysql",
  host: dbHost,
  port: 3306,
  logging: false,
});

module.exports = { sequelize };
