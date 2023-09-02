const Sequelize = require("sequelize");
const sequelizeDb = require("../database");

const ProductDescription = sequelizeDb.define("productDescription", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  productID: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.DECIMAL(10),
    allowNull: false,
  },
  imageURL: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  stock: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    validate: {
      length: [1, 4],
    },
  },
});

module.exports = ProductDescription;
