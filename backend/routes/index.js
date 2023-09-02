const express = require("express");
const route = express.Router();
const authRoute = require("./auth");
const sessionRoute = require("./session");

route.use("/auth", authRoute);
route.use("/session", sessionRoute);
module.exports = route;
