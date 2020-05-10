const shortUrlModel = require("../model/shortenUrl");
const validUrl = require("valid-url");

exports.shortUrl = async (req, res) => {
  const key = Object.keys(req.body);
  try {
    if (key[0] != "url") {
      throw new Error("please use the correct header input");
    }

    if (!validUrl.isWebUri(req.body.url)) {
      throw new Error("please use the valid url");
    }

    const shortUrl = new shortUrlModel({
      orignalUrl: req.body.url,
    });
    await shortUrl.save();

    res.status(201).json(shortUrl);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

exports.AllShortLinks = async (req, res) => {
  try {
    const links = await shortUrlModel.find({}, { _id: 0, __v: 0 }).exec();
    if (links.length == 0) {
      throw new Error("No result found");
    }

    res.status(200).send(links);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.decodeUrl = async (req, res) => {
  try {
    const url = await shortUrlModel.findOne({ shortUrl: req.params.id }).exec();
    if (url == null) {
      throw new Error("This URL in not valid..!");
    }
    res.redirect(url.orignalUrl);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
