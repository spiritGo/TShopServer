const mysql = require("mysql");

module.exports = mysql.createPool({
  host: "127.0.0.1",
  port: "3306",
  password: "",
  user: "root",
  database: "tshop",
  connectionLimit: 20
});
