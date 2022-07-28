const express = require("express");
const morgan = require("morgan");
const textRoute = require("./routes/text.routes.js");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE",
    true
  );
  next();
});

server.use("/iecho", textRoute);

module.exports = server;
