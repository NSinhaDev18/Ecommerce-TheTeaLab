const express = require("express");
const userDetailRoute = require("./userDetailRoute");
const route = express.Router();
const { checkLogin } = require("../common/middleware");

route.use("/userdetail", checkLogin, userDetailRoute);

module.exports = route;
