const app = require("./app.js");

const dotenv = require("dotenv");

const sequelizeDb = require("./models/database.js");
const Customer = require("./models/customerModel.js");
const Order = require("./models/orderModel.js");
const OrderItem = require("./models/orderModel.js");

//config
dotenv.config({ path: "backend/config/config.env" });

(async () => {
  await sequelizeDb.sync();
})();

app.listen(process.env.PORT, () => {
  console.log(`Server started on port: ${process.env.PORT}`);
});
