const dbConfig = require("./config/database-config");
const Sequelize = require("sequelize");

const sequelizeDb = new Sequelize(
  dbConfig.DATABASE,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
    port: dbConfig.PORT,
    dialectOptions: {
      ssl: true,
    },
  }
);
module.exports = sequelizeDb;
