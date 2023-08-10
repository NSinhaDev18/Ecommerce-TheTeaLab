const express = require("express");
const app = express();
app.use(express.json());

//Routes
const item = require("./routes/itemsRoute");

app.use("/api/v1", item);

module.exports = app;
