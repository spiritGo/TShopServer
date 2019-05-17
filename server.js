const express = require("express");
const router = require("./routers/router.js");
const cors = require("cors");

const server = express();

server.listen(3000);
server.use(express.static("public"));
server.use(
  cors({
    credentials: true,
    origin: ["http://localhost:8080"]
  })
);

server.use("", router);
