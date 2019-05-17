var pool = require("../pool.js");
var express = require("express");
var router = express.Router();

module.exports = router.get("/banner", (req, res) => {
  var sql = "select id,pic from banner";
  pool.query(sql, (err, data) => {
    if (err) throw err;
    if (data.length > 0) res.send({ code: 200, data: data });
    else res.send({ code: 400, data: [] });
  });
});
