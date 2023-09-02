const express = require("express");
const { updateMobileHandler } = require("../Controllers/sessionHandler");

const route = express.Router();

route.post("/updatemobile", updateMobileHandler);

module.exports = route;
