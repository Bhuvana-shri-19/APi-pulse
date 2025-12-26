const mongoose = require("mongoose");

const apiTestSchema = new mongoose.Schema({
  url: String,
  status: String,
  responseTime: Number
});

module.exports = mongoose.model("ApiTest", apiTestSchema);
