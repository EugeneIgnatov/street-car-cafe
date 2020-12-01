var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");

const dbURL =
  "mongodb+srv://me:C2aruWafjJH25LC@streetcar-menu.t32vp.mongodb.net/menu?retryWrites=true&w=majority";

router.get("/", function (req, res, next) {
  mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

  res.send("API with menu");
});

module.exports = router;
