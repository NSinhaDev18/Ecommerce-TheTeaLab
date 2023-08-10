const dbConfig = require("../config/database-config");
const Sequelize = require("sequelize");

const sequelizeDb = new Sequelize(
  dbConfig.DATABASE,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
  }
);

//Exporting our Sequelize Model:
/*We also want to export each Sequelize model we create. Remember, a model is a representation of a MySQL table. 
For example, this application will have a table of all registered users.
db.models = {};
db.models.User = require('./user')(sequelize, Sequelize.DataTypes);
Ref- https://blog.wittcode.com/node-and-express-connect-to-mysql-database-with-sequelize 
*/
module.exports = sequelizeDb;
