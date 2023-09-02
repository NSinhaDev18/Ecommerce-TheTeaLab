const Sequelize = require("sequelize");
const sequelizeDb = require("../database");
const Order = require("./orderModel");
const OrderItem = require("./orderModel");

const Customer = sequelizeDb.define(
  "customers",
  {
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
    mobile: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    city: { type: Sequelize.STRING, allowNull: false },
    state: { type: Sequelize.STRING, allowNull: false },
    pincode: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    // role: {
    //   type: Sequelize.ENUM("USER", "ADMIN"),  //uncomment after altering the database.
    // },
  },
  { timestamps: true }
);
Customer.hasMany(Order);

module.exports = Customer;
