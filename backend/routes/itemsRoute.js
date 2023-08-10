const express = require("express");
const { getAllitems } = require("../Controllers/itemsController");

const router = express.Router();

router.route("/items").get(getAllitems);

module.exports = router;
