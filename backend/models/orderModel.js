const Sequelize = require("sequelize");
const sequelizeDb = require("../database");
const OrderItem = require("./orderItemsModel");
const Order = sequelizeDb.define("orders", {
  orderId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },

  totalItems: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  totalPrice: {
    type: Sequelize.DECIMAL(38),
    allowNull: false,
  },
});

// Define Associations
Order.hasMany(OrderItem, { foreignKey: "orderId" });
OrderItem.belongsTo(Order, { foreignKey: "orderId" });

module.exports = Order;
