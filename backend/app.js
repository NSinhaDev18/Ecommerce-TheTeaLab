const express = require("express");
const indexRouter = require("./routes/index");

const app = express();
app.use(express.json());

// Middleware for parsing JSON data
app.use(express.json());
// Middleware for parsing URL-encoded form data
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  next();
});
//Routes
app.use("/api/v1", indexRouter);

module.exports = app;
