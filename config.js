const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "wildcodeschool",
  database: "clinic_db",
});

module.exports = connection;
