const express = require("express");
const shortUrlController = require("../controller/shortenUrl");
const route = express.Router();

route.post("/new", shortUrlController.shortUrl);
route.get("", shortUrlController.AllShortLinks);
route.get("/:id", shortUrlController.decodeUrl);

module.exports = route;
