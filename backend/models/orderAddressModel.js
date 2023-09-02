const Sequelize = require("sequelize");
const sequelizeDb = require("../database");

const OrderAddress = sequelizeDb.define("orderAddress", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  customer_id: {
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  contact_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  mobile: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address_line1: {
    type: Sequelize.TEXT("medium"),
    allowNull: false,
  },
  address_line2: {
    type: Sequelize.TEXT("medium"),
  },
  landmark: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  pincode: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  country: {
    type: Sequelize.STRING,
    defaultValue: "India",
    allowNull: false,
  },
});
module.exports = OrderAddress;
