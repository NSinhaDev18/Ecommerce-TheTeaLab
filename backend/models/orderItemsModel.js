const Sequelize = require("sequelize");
const sequelizeDb = require("../database");

const OrderItem = sequelizeDb.define("orderItems", {
  productId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
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
});
module.exports = OrderItem;
