const Sequelize = require("sequelize");
const sequelizeDb = require("../models/database");

const customer = sequelizeDb.define("customer", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING(10),
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

//use bcrypt, JWT token, compare password, password reset token, hashing.. to be added

module.exports = customer;
