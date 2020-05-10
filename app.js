const express = require("express");
const app = express();
const cors = require("cors");
require("./src/db/connection");
const shortUrl = require("./src/Route/shortenUrl");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(shortUrl);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is up on running in PORT ${port}`);
});
