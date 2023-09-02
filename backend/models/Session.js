const Sequelize = require("sequelize");
const sequelizeDb = require("../database");

const Session = sequelizeDb.define("session", {
  sessionId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  jwt: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: new Date().toLocaleDateString(),
    allowNull: false,
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: new Date().toLocaleDateString(),
    allowNull: false,
  },
});
module.exports = Session;
