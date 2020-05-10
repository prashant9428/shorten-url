const mongoose = require("mongoose");
const short = require("shortid");

const urlSchema = new mongoose.Schema({
  orignalUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    require: true,
    default: short.generate,
  },
});

const ShortenUrl = mongoose.model("url", urlSchema);
module.exports = ShortenUrl;
