const Sequelize = require("sequelize");
const sequelizeDb = require("../models/database");
const Order = require("./orderModel");
const OrderItem = require("./orderModel");

const Customer = sequelizeDb.define("customers", {
  customerId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  firstName: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATEONLY,
    defaultValue: new Date().toLocaleDateString(),
    allowNull: false,
  },
});
Customer.hasMany(Order);
//use bcrypt, JWT token, compare password, password reset token, hashing.. to be added

module.exports = Customer;
