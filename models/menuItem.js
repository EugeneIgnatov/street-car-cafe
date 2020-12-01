var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var menuItem = new Schema({
  title: { type: String, require: true },
  price: { type: String, require: true },
  description: { type: String, require: true },
});

module.exports(menuItem);
