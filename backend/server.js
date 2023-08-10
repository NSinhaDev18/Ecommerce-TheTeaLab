const app = require("./app.js");

const dotenv = require("dotenv");

const db = require("./models");

//config
dotenv.config({ path: "backend/config/config.env" });
(async () => {
  await db.sequelize.sync();
})();

app.listen(process.env.PORT, () => {
  console.log(`Server started on port: ${process.env.PORT}`);
});
