const Sequelize = require("sequelize");
const sequelizeDb = require("../models/database");

const order = sequelizeDb.define("orders", {
  orderId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  orderItems: [
    {
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      productName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      pricePerUnit: {
        type: Sequelize.DECIMAL(10),
        allowNull: false,
      },
      totalPrice: {
        type: Sequelize.DECIMAL(25),
        allowNull: false,
      },
      statusId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
  ],
  totalItems: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  totalPrice: {
    type: Sequelize.DECIMAL(38),
    allowNull: false,
  },
});

module.exports = order;
