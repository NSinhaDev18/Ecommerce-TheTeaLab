const express = require("express");
const {
  signupHandler,
  loginHandler,
  resetPasswordHandler,
  createPasswordHandler,
} = require("../Controllers/authHandler");
const route = express.Router();

route.post("/signup", signupHandler);
route.post("/login", loginHandler);
route.post("/forgotpassword", resetPasswordHandler);
route.post("/createpassword/:token", createPasswordHandler);

module.exports = route;
